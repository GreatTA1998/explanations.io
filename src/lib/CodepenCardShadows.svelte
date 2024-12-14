<div class=card style=--elevation:0>0</div>
<div class=card style=--elevation:1>1</div>
<div class=card style=--elevation:2>2</div>
<div class=card style=--elevation:4>4</div>
<div class=card style=--elevation:8>8</div>
<div class=card style=--elevation:16>16</div>
<div class=card style=--elevation:24>24</div>

<style>
.card {
  --elevation: 0;
  --epx: calc(var(--elevation) * 1px);
  
  /* these 2 shadows serve as a border for  0-1 elevation    */
  --shadow1: 0 0 1px rgba(0, 0, 0, .1);
  --shadow2: 0 1px 2px rgba(0, 0, 0, .08);
  
  --offset-y: calc(var(--epx) + 1px);
  --blur: calc(var(--epx) * 2);
  --spread: calc(var(--epx) * .3);
  --shadow3: 
      0 var(--offset-y) 
      var(--blur) 
      var(--spread) 
      rgba(0, 0, 0, 0.2);
  
  box-shadow: 
    var(--shadow1),
    var(--shadow2),
    var(--shadow3);
}

.card {
  line-height:200px;
  text-align:center;
  background: white;
  border-radius: 4px;
  width: 200px;
  height: 200px;
}


/* 
body {
  padding: 1rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, 200px);
  background: #e2e1e0;

} */


</style>