const ProjectCard = ({ item, index, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className={`project-card ${item.className}`}
      style={{
        top: `${index * 40}px`,
      }}
    >
      <a 
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="card-left">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>

        <div className="card-right">
          <img src={item.image} alt={item.title} />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;