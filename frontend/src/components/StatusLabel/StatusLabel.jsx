import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

const StatusLabel = ({ status }) => {
    const getStatusProps = () => {
      switch (status.toLowerCase()) {
        case "released":
          return { icon: <FontAwesomeIcon icon={faCircle} size="xs" style={{color: "#2de142",}} />, color: "text-success" };
        case "available":
          return { icon: <FontAwesomeIcon icon={faCircle} size="xs" style={{color: "#74C0FC",}} />, color: "text-primary" };
        case "defective":
          return { icon: <FontAwesomeIcon icon={faCircle} size="xs" style={{color: "#f95d5d",}} />, color: "text-danger" };
        default:
          return { icon: <FontAwesomeIcon icon={faCircle} size="xs" style={{color: "#9e9494",}} />, color: "text-secondary" }; // Default case
      }
    };
  
    const { icon, color } = getStatusProps();
  
    return (
      <div className={`flex items-center gap-2 ${color}`}>
        {icon} &nbsp;
        {status}
      </div>
    );
  };

export default StatusLabel;