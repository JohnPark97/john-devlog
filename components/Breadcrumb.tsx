type BreadcrumbProps = {
    paths: string[];
  }
  
  const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
    return (
      <div>
        {paths.map((path, index) => (
          <span key={index}>
            <a href={`/${path}`}>{path}</a>
            {index < paths.length - 1 && " > "}
          </span>
        ))}
      </div>
    );
  }
  
  export default Breadcrumb;
  