interface Props {
  title: string;
  info: string;
  skills: string[];
  languages: string[];
}

const Projectcomponent: React.FC<Props> = ({
  title,
  info,
  skills,
  languages,
}) => {
  

  return (
    <div className="project">
      <div className="project-img"></div>
      <div className="project-desc">
        <div className="project-title">{title}</div>
        <hr style={{ width: "50%", marginLeft: 0 }} />
        <div className="project-info">{info}</div>
        <div className="project-list-cont">
          <div className="project-skills">
            Skills I learnt:
            <ul>
              {skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="project-lang">
            Languages used:
            <ul>
              {languages.map((language) => {
                return <li>{language}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcomponent