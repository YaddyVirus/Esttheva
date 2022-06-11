export default function Appointment() {
    return (
        <>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Book an appointment
            </button>

            {/* Appointment modal content */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Book an appointment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="p-2 rounded-3">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="contactName" placeholder="What do we call you?" />
                                    <label htmlFor="">Your name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" name="contactName" placeholder="What do we call you?" />
                                    <label htmlFor="">Contact number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                    <label htmlFor="floatingTextarea2">What services do you want?</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Get in touch</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}