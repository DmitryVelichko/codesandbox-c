 const Team = (props) => {
 return (
    <div id='usecases' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>AI Use Cases</h2>
          <p>
            Real-world applications of AI systems we design and build.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4 col-sm-6 usecase'>
                  <div className='usecase-box'>
                    <i className={d.icon}></i>
                    <h4>{d.title}</h4>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};

export default Team