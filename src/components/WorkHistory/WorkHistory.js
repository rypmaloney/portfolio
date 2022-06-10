import './WorkHistory.css';
import Resume from './Resume';
import pdf from '../../images/Resume_2022.pdf';

const WorkHistory = () => {
  return (
    <div className="WorkHistory-wrapper">
      <object data={pdf} type="application/pdf">
        <div className="display">
          <Resume />
        </div>
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can{' '}
          <a href={pdf}>click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  );
};

export default WorkHistory;
