const Arrow = ({ direction, clickFunction, glyph }) => {
  return (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
      <style jsx>{`
        .slide-arrow {
          margin: 0 1em 1em 1em;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Arrow;
