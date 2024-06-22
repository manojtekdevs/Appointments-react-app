import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  onClickStarred = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      ),
    }))
  }

  togglesIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  render() {
    const {appointmentsList, title, date} = this.state
    return (
      <div className="app-bg-container">
        <div className="appointments-container">
          <div className="appointments-entry-card">
            <form
              className="appointments-form"
              onSubmit={this.onAddAppointment}
            >
              <h1 className="main-heading">Add Appointment</h1>
              <label className="input-label" htmlFor="appointmentTitle">
                TITLE
              </label>
              <input
                className="input-title"
                type="text"
                id="appointmentTitle"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <label className="input-label" htmlFor="appointmentDate">
                DATE
              </label>
              <input
                className="input-date"
                type="date"
                value={date}
                id="appointmentDate"
                placeholder="dd/mm/yyyy"
                onChange={this.onChangeDate}
              />
              <button type="submit" className="appointment-add-button">
                Add
              </button>
            </form>
            <div className="appointment-image-card">
              <img
                className="appointment-image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="b">
            <h1 className="appointments">Appointments</h1>
            <button
              type="button"
              className="starred-filter-button"
              onClick={this.onClickStarred}
            >
              starred
            </button>
          </div>
          <ul className="appointments-list">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                togglesIsStarred={this.togglesIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
