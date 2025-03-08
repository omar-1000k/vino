<script lang="ts">
  export let text: string;
  export let font: string;
  export let fontSize: number;
  export let spacing: number;
  export let position: number;
</script>

<div class="wine-label">
  <div
    class="label-content"
    style="
      font-family: {font};
      font-size: {fontSize}px;
      letter-spacing: {spacing}px;
      top: {position}%;
    "
  >
    {text}
  </div>
</div>

<style>
  .wine-label {
    width: 300px;
    height: 150px;
    background: #f0d9b5;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label-content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: #333;
  }
</style>