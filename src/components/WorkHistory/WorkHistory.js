import './WorkHistory.css';
import Resume from './Resume';
import pdf from '../../images/Resume_2022.pdf';

const WorkHistory = () => {
  return (
    <div className="WorkHistory-wrapper">
      {/* <div className="display">
        <Resume />
      </div> */}
      <embed src={pdf} type="application/pdf"></embed>
    </div>
  );
};

export default WorkHistory;
