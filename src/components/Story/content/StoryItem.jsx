

const StoryItem = ({ img, alt, num, subject, subSubject, content }) => {
  return (
    <li className="story-item">
      <div className="img-box">
        <img src={img} alt={alt} />
      </div>

      <div className="text-box">
        <span className="num">{num}</span>
        <h3 className="subject">{subject}</h3>
        <p className="sub-subject">{subSubject}</p>

        <p className="content">
          {content.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </li>
  );
};

export default StoryItem;