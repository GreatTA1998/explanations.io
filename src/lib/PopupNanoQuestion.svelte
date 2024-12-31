<!-- I really like the idea of nano-questions, which is why I'm keeping it around to remind myself. -->
<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Nano-question
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if isOriginalVideoCreator}
      <TextAreaAutoResizing 
        value={boardDoc.nanoQuestion || ''}
        fontSizeIncludeUnits="1rem"
        on:input={(e) => debouncedUpdateNanoQuestion(e)}
        placeholder="Nano-question"
      />

      <TextAreaAutoResizing 
        value={boardDoc.nanoAnswer || ''}
        fontSizeIncludeUnits="1rem"
        on:input={(e) => debouncedUpdateNanoAnswer(e)}
        placeholder="Nano-answer for reference"
      />

      <div style="color: green;">
        {userFeedbackMsg}
      </div>
    {:else}
      <TextAreaAutoResizing 
        value={boardDoc.nanoQuestion}
        fontSizeIncludeUnits="1rem"
        on:input={(e) => debouncedUpdateNanoQuestion(e)}
        placeholder="No nano-question provided yet"
        readonly
      />
      {#if isRevealingAnswer}
        <TextAreaAutoResizing 
          value={boardDoc.nanoAnswer}
          fontSizeIncludeUnits="1rem"
          placeholder="No nano-answer provided yet"
          readonly
        />
      {/if}
    {/if}
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button on:click={() => isRevealingAnswer = true}>
      Reveal reference answer
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/Reusable/BasePopup.svelte'
  import Button from '@smui/button'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { createEventDispatcher } from 'svelte'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
  import { roundedToFixed, debounce } from '../helpers/utility.js'

  export let isOriginalVideoCreator 
  export let boardDbPath
  export let boardDoc

  let isRevealingAnswer = false
  let userFeedbackMsg = ''

  const dispatch = createEventDispatcher()

  const debouncedUpdateNanoQuestion = debounce(
    updateNanoQuestion,
    1000
  ) 

  const debouncedUpdateNanoAnswer = debounce(
    updateNanoAnswer, 
    1000
  )

  async function updateNanoQuestion ({ detail }) {
    await updateFirestoreDoc(boardDbPath, {
      nanoQuestion: detail
    })
    userFeedbackMsg = 'Successfully updated question.'
    setTimeout(() => userFeedbackMsg  = '', 2000)
  }

  async function updateNanoAnswer ({ detail }) {
    userFeedbackMsg = 'Saving...'
    updateFirestoreDoc(boardDbPath, {
      nanoAnswer: detail
    })
    userFeedbackMsg = 'Successfully updated answer.'
    setTimeout(() => userFeedbackMsg = '', 2000)
  }
</script>