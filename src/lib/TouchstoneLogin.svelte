<!-- TO-DO: 
  2. Backwards compatibility argument
    - Notification system (deprecate, instead let them communicate through group chat)
-->

<!-- Login popup that opens by default on the class overview page,
  that way when you redirect to the overview page 
  it will in effect act as a login-page
-->

<!-- Direct login flow -->
<div style="
  color: green; 
  border: 1px solid green; 
  margin-bottom: 2px;
  width: 200px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 8px;
  align-text: center;
  display: flex;
  justify-content: center;
  align-items: center;
">
  <span class="material-icons" style="margin-right: 6px;">
    school
  </span>
  MIT 
</div>

<script>

function signInWithTouchstone () {
  const provider = new firebase.auth.SAMLAuthProvider("saml.mit-touchstone"); 
  firebase.auth().signInWithPopup(provider)
    .then(async result => {
      await this.$_createMirrorDocIfNeeded(result); 
      await this.$store.dispatch("listenToUserDoc", { uid: result.user.uid });
      this.$store.commit("SET_HAS_FETCHED_USER_INFO", true); 
      // redirect to most recent class
      const { class_id, section_id, room_id } = this.$route.params; 
      if (!(class_id && section_id && room_id)) {
        const { mostRecentClassID } = this.$store.state.user; 
        this.$router.replace(`/class/${mostRecentClassID}/section/${mostRecentClassID}/room/${mostRecentClassID}`);
      }
    })
    .catch(error => {
      console.log("error =", error);
    });
}

async function createInitialMirrorDocFromTouchstoneMetadata (result) {
  try {
    return new Promise(async (resolve) => {  
      // translate variable names
      const userInfo = result.additionalUserInfo.profile; 
      const fullName = userInfo["urn:oid:2.16.840.1.113730.3.1.241"];
      const firstName = fullName.split(" ")[0];
      const lastName = fullName.split(" ")[1];
      const email = userInfo["urn:oid:1.3.6.1.4.1.5923.1.1.1.6"];
      const kind = userInfo["urn:oid:1.3.6.1.4.1.5923.1.1.1.1"];
      const year = userInfo["urn:oid:1.2.840.113554.1.4.1.1.15"];

      const queryResult = await db.collection("users").where("email", "==", email).get();
      console.log("queryResult =", queryResult);
      if (queryResult.empty) {
        await this.$_createAccount({
          firstName,
          lastName,
          email,
          uid: result.user.uid,
          kind // "student", "staff", "affiliate"
        });            
        this.$root.$emit("show-snackbar", "Successfully created account");
      } else {
        // queryResult.docs[0].id
        this.$root.$emit("show-snackbar", "Welcome back!");
      }
      resolve(); 
    });
  }
  catch (error) {
    console.log("error =", error);
  }
}
</script>