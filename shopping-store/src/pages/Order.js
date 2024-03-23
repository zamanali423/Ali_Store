import React from "react";

const Order = () => {
  return (
    <div className="container">
      <form>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div class="row mb-4">
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <label class="form-label" for="form6Example1">
                First name
              </label>
              <input type="text" id="form6Example1" class="form-control" />
            </div>
          </div>
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <label class="form-label" for="form6Example2">
                Last name
              </label>
              <input type="text" id="form6Example2" class="form-control" />
            </div>
          </div>
        </div>

        {/* <!-- Text input --> */}
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form6Example3">
            Company name
          </label>
          <input type="text" id="form6Example3" class="form-control" />
        </div>

        {/* <!-- Text input --> */}
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form6Example4">
            Address
          </label>
          <input type="text" id="form6Example4" class="form-control" />
        </div>

        {/* <!-- Email input --> */}
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form6Example5">
            Email
          </label>
          <input type="email" id="form6Example5" class="form-control" />
        </div>

        {/* <!-- Number input --> */}
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form6Example6">
            Phone
          </label>
          <input type="number" id="form6Example6" class="form-control" />
        </div>

        {/* <!-- Message input --> */}
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form6Example7">
            Additional information
          </label>
          <textarea class="form-control" id="form6Example7" rows="4"></textarea>
        </div>

        {/* <!-- Submit button --> */}
        <button
          data-mdb-ripple-init
          type="button"
          class="btn btn-primary btn-block mb-4"
        >
          Place order
        </button>
      </form>
    </div>
  );
};

export default Order;
