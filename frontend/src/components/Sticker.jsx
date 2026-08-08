function Sticker({ stars }) {

  let sticker = "🙂";

  if (stars >= 5) sticker = "🐻";
  if (stars >= 10) sticker = "🦋";
  if (stars >= 20) sticker = "🦄";
  if (stars >= 50) sticker = "👑";

  return (

    <div className="reward-card">

      <h2>🎁 Sticker Collection</h2>

 <div className="sticker-emoji">
    {sticker}
</div>
      <p>
        Collect more stars to unlock new stickers.
      </p>

    </div>

  );

}

export default Sticker;