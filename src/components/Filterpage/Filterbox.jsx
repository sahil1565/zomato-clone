import React from "react";

export default function Filterbox() {
  return (
    <>
      <div
        className="shadow p-4 filter  panel-collapse collapse show"
        id="collapse1">
        <p className="fw-bold fs-5 my-2 indexColor">Filters</p>
        <label htmlFor="location" className="my-2">
          Select a Location
        </label>
        <br />
        <div>
          <select class="form-select form-select-sm selectLocationDropdown">
            <option class="" value="">
              Select a Location
            </option>
            <option value="1">Shalimar Bagh, Delhi</option>
            <option value="2">Janpat, Delhi</option>
            <option value="3">MSP, Delhi</option>
            <option value="4">MSP, Pune</option>
            <option value="5">Anand Vihar, Delhi</option>
            <option value="6">VIP Road, Chandigarh</option>
            <option value="7">Mapusa, Goa</option>
            <option value="8">Vile Parle East, Mumbai</option>
            <option value="9">BullBhai Desai Road, Mumbai</option>
            <option value="10">Calangute - Baga Rd, Goa</option>
            <option value="11">Gandhi Nagar, Jammu</option>
          </select>
        </div>
        <p className="fw-bold my-3 indexColor">Cuisine</p>

        <input type="checkbox" name="cuisine" id="north" value="1" />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          North Indian
        </label>
        <br />
        <input type="checkbox" name="cuisine" id="north" value="2" />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          South Indian
        </label>
        <br />
        <input type="checkbox" name="cuisine" id="north" value="Chinese" />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          Chinese
        </label>
        <br />
        <input type="checkbox" name="cuisine" id="north" value="3" />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          Fast Food
        </label>
        <br />
        <input type="checkbox" name="cuisine" id="north" value="4" />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          Street Food
        </label>

        <p className="fw-bold my-4 indexColor">Cost for Two</p>
        <input type="radio" name="cost" value="0-500" id="0-500" />
        <label className="my-1 thirdColor ms-1">Less than &#8377; 500</label>
        <br />
        <input type="radio" name="cost" value="500-1000" id="500-1000" />
        <label className="my-1 thirdColor ms-1">
          &#8377; 500 to &#8377; 1000
        </label>
        <br />
        <input type="radio" id="1000-1500" name="cost" value="1000-1500" />
        <label className="my-1 thirdColor ms-1">
          &#8377;1000 to &#8377; 1500
        </label>
        <br />
        <input type="radio" name="cost" value="1500-2000" id="1500-2000" />
        <label className="my-1 thirdColor ms-1">
          &#8377;1500 to &#8377; 2000
        </label>
        <br />
        <input type="radio" name="cost" value="2000-3000" id="2000-3000" />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          &#8377;2000
        </label>

        <p className="fw-bold my-4 indexColor">Sort</p>
        <input type="radio" name="sort" id="low-high" value="1" />
        <label htmlFor="low-high" className="my-1 thirdColor ms-1">
          Price low to high
        </label>
        <br />
        <input type="radio" name="sort" id="high-low" value="-1" />
        <label htmlFor="high-low" className="my-1 thirdColor ms-1">
          Price high to low
        </label>
        <br />
      </div>
    </>
  );
}
