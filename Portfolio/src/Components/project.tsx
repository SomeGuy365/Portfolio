interface Props {
  title: string;
  info: string;
  skills: string[];
  languages: string[];
  desc: string;
}

const Projectcomponent: React.FC<Props> = ({
  title,
  info,
  skills,
  languages,
  desc
}) => {
  return (
    <div className="project">
      <div className="project-img"></div>
      <div className="project-desc">
        <div className="project-title">{title}</div>
        <hr style={{ width: "50%", marginLeft: 0 }} />
        <div className="project-qdesc">
          {desc}
        </div>
        <div className="project-info">{info}</div>
        <div className="project-list-cont">
          <div className="project-skills">
            Skills:
            <ul style={{ marginTop: 0 }}>
              {skills.map((skill) => {
                return <div>- {skill}</div>;
              })}
            </ul>
          </div>
          <div className="project-lang">
            Languages involved:
            <ul style={{ marginTop: 0 }}>
              {languages.map((language) => {
                return <div>- {language}</div>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcomponent;
