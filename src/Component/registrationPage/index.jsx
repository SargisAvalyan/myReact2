import React from "react";
import "./style.scss"


class Registration extends React.Component {
    state = {
        formData:
        {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phonecode: "",
            phonenumber: "",
            subject: "",
            finish: "true"
        },
        errorData:
        {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phonecode: "",
            phonenumber: "",
            subject: "",
            finish: "false"
        }
    }
    onChangeFirstName = (e) => {

        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }
    handleClick = () => {
        const { formData, errorData } = this.state
        const newErrorData = {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phonecode: "",
            phonenumber: "",
            subject: "",
            finish: "false"
        }


        if (!formData.firstName.trim().length) {
            newErrorData.firstName = 'Lracreq Anun@'
        }
        if (!formData.lastName.trim().length) {
            newErrorData.lastName = 'Lracreq Azganun@'
        }
        if (!formData.company.trim().length) {
            newErrorData.company = 'Lracreq Ynkerutyan anuny'
        }
        if (!formData.email.trim().length) {
            newErrorData.company = 'lracreq email'
        }
       

        

        this.setState({ errorData: newErrorData })

    }

    render() {
        const { formData, errorData } = this.state
        return <section>
            <div className="G-container">
                <div className="user">
                    <p className="inputname">Name</p>
                    <div className="firstName">
                        <label>
                            <input name={'firstName'}
                                onChange={this.onChangeFirstName}
                                value={formData.firstName}
                                placeholder='First Name'
                                className='P-inputs' type="text"
                            />
                            {errorData.firstName ? <p className="errortext">{errorData.lastName}</p> : null}
                        </label>
                    </div>
                    <div className="lastName">
                        <label>
                            <input name={'lastName'}
                                onChange={this.onChangeFirstName}
                                value={formData.lastName}
                                placeholder='Last Name'
                                className='P-inputs' type="text"
                            />
                            {errorData.lastName ? <p className="errortext">{errorData.lastName}</p> : null}
                        </label>
                    </div>
                </div>

                <div className="user">
                    <p className="inputname">Company</p>

                    <label>
                        <input name={'company'}
                            onChange={this.onChangeFirstName}
                            value={formData.company}
                            className='P-inputs-company' type="text"
                        />
                            {errorData.company ? <p className="errortext">{errorData.company}</p> : null}

                    </label>
                </div>
                <div className="user">
                    <p className="inputname">Email</p>

                    <label>
                        <input name={'email'}
                            onChange={this.onChangeFirstName}
                            value={formData.email}
                            className='P-inputs-company' type="email"
                        />
                            {errorData.email ? <p className="errortext">{errorData.email}</p> : null}

                    </label>
                </div>

                <div className="user">
                    <p className="inputname">Phone</p>
                    <div className="phonecode">


                        <label>
                            <input name={'phonecod'}
                                onChange={this.onChangeFirstName}
                                value={formData.phonecode}
                                className='P-inputscode' type="number"
                                placeholder="Area Code"
                            />
                        </label>
                    </div>
                    <div className="phonenumber">
                        <label>
                            <input name={'phonenumber'}
                                onChange={this.onChangeFirstName}
                                value={formData.phonenumber}
                                className='P-inputs' type="number"
                                placeholder=" Phone Number"
                            />
                        </label>
                    </div>
                </div>
                <div className="user">
                    <p className="inputname">Subject</p>
                    <label>
                        <input name={'subject'}
                            onChange={this.onChangeFirstName}
                            value={formData.subject}
                            className='P-inputs-company' type=""
                        />
                    </label>
                </div>
                <p className="inputfinish">Are you an existing customer?</p>
                <div className="fin">

                    <div className="userfinish">
                        <label>

                            <input name={'finish'}
                                onChange={this.onChangeFirstName}
                                value={formData.finish}
                                className='P-inputs-radio' type="radio"
                            />
                        </label>
                        <p>YES</p>
                    </div>
                    <div className="userfinish">

                        <label>

                            <input name={'finish'}
                                onChange={this.onChangeFirstName}
                                value={formData.finish}
                                className='P-inputs-radio' type="radio"
                            />
                        </label>
                        <p>No</p>
                    </div>

                </div>

                <button className="regbutton" onClick={this.handleClick}>REGISTER</button>

            </div>


        </section>
    }
}

export default Registration