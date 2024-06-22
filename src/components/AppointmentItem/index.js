import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, togglesIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  const onClickStarButton = () => {
    togglesIsStarred(id)
  }

  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="appointment-details-container">
        <div className="appointment-title-star">
          <p className="appointment-title">{title}</p>
          <button
            className="appointment-star-button"
            type="button"
            data-testid="star"
            onClick={onClickStarButton}
          >
            <img className="star-icon" src={starImageUrl} alt="star" />
          </button>
        </div>
        <p className="appointment-date">
          {format(new Date(date), 'dd MMMM yyyy, EEEE')}
        </p>
      </div>
    </li>
  )
}
export default AppointmentItem
