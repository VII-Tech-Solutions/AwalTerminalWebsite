<template>
  <div class="aviation-form bg-white">
    <div class="container">
      <div class="form-header">
        <router-link to="/">
          <figure class="mb-0 form-logo">
            <img
                class="img-fluid"
                src="../../assets/images/forms-header-logo.png"
            />
          </figure>
        </router-link>
      </div>
      <div class="form-body">
        <div class="form-page-title">
          <div
              class="
              d-flex
              flex-md-row flex-column
              align-items-center
              justify-content-between
            "
          >
            <h3 class="form-h3 text-capitalize">General Aviation</h3>
            <p class="form-p lora-semi m-0">
              Step <span>6</span> of <span>6</span>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-10">
            <form class="general-form form-details">
              <fieldset class="mb-3">
                <legend class="form-title sub-title">
                  Review & Submit Application
                </legend>
                <p class="fw-bold form-p mb-lg-3 mb-2">
                  Here is an overview of all the details you have submitted
                </p>
              </fieldset>
              <div class="accordion detail-section" id="accordionExample">
                <div class="accordion-item">
                  <div class="detail-section-header w-100">
                    <p
                        class="-capitalize detail-section-title accordion-header"
                        id="headingOne"
                    >
                      <button
                          class="
                          accordion-button
                          text-capitalize
                          detail-section-title
                        "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                      >
                        flight information
                      </button>
                    </p>
                  </div>
                  <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="details-list">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                aircraft type <span class="asterik">*</span>
                              </p>
                              <p
                                  class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                {{ obj.aircraft_type }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                Registration<span class="asterik">*</span>
                              </p>
                              <p
                                  class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                {{ obj.registration_number }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                MTOW (KG)<span class="asterik">*</span>
                              </p>
                              <p
                                  class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                {{ obj.mtow }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                Lead Passenger Name<span class="asterik"
                              >*</span
                              >
                              </p>
                              <p
                                  class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                {{ obj.lead_passenger_name }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p">
                                Purpose of Landing<span class="asterik">*</span>
                              </p>
                              <p class="extra-small-text fw-normal">
                                {{ obj.landing_purpose }} <br/>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                      class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                      id="headingTwo"
                  >
                    <button
                        class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                    >
                      your journey
                    </button>
                  </p>
                  <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="accordian-ul">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p text-capitalize">
                                arrivial
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Call Sign<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.arrival_call_sign }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        from Airport<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.arriving_from_airport.name }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        ETD (UTC Time)<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.estimated_time_of_arrival }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Arrival Date<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.arrival_date }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-inherit
                                        "
                                      >
                                        Nature of Flight<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.arrival_flight_nature }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Passenger Count<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.arrival_passenger_count }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p text-capitalize">
                                departure
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Call Sign<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.departure_call_sign }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        To Airport<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.departure_to_airport.name }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        ETD (UTC Time)<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.estimated_time_of_departure }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Departure Date<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.departure_date }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-inherit
                                        "
                                      >
                                        Nature of Flight<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.departure_flight_nature }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Passenger Count<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.departure_passenger_count }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                      class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                      id="headingThree"
                  >
                    <button
                        class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                    >
                      Operator & Agent Information
                    </button>
                  </p>
                  <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="accordian-ul">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p text-capitalize">
                                Operator
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Full Name<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.operator_full_name }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Country<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.operator_country }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Telephone Number<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.operator_tel_number }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Email Address<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.operator_email }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Address<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.operator_address }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Billing Address<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.operator_billing_address }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li v-if="obj.is_using_agent === true">
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p text-capitalize">
                                Agent
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Full Name<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.agent_fullname }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Country<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{
                                          obj.agent_country != undefined
                                              ? obj.agent_country
                                              : ""
                                        }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Telephone Number<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ obj.agent_phoneNumber }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Email Address<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.agent_email }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Address<span class="asterik">*</span>
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.agent_address }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Billing Address<span class="asterik"
                                      >*</span
                                      >
                                      </p>
                                      <p
                                          class="
                                          extra-small-text
                                          fw-normal
                                        "
                                      >
                                        {{ obj.agent_billing_address }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                      class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                      id="headingFour"
                  >
                    <button
                        class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                    >
                      Required Services
                    </button>
                  </p>
                  <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="accordian-ul">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p">
                                List of Services
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li
                                      v-for="item in selectedservice"
                                      :key="item"
                                  >
                                    <div class="d-flex align-items-baseline">
                                      <p
                                          class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ item.name }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                      class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                      id="headingFive"
                  >
                    <button
                        class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                    >
                      Documents & Remarks
                    </button>
                  </p>
                  <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="details-list">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p
                                  class="
                                  extra-small-text
                                  text-capitalize
                                  list-width
                                "
                              >
                                Aircraft Certifications Checklist
                              </p>
                              <a href="#"
                              ><p
                                  class="
                                    extra-small-text
                                    fw-normal
                                    text-decoration-underline
                                  "
                              >
                                {{
                                  textboxobj == undefined
                                      ? ""
                                      : textboxobj.airCraftCert
                                }}
                              </p></a
                              >
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p
                                  class="
                                  extra-small-text
                                  list-width
                                  text-capitalize
                                "
                              >
                                Arrival Gendec
                              </p>
                              <a href="#"
                              ><p
                                  class="
                                    extra-small-text
                                    fw-normal
                                    text-decoration-underline
                                  "
                              >
                                {{
                                  textboxobj == undefined
                                      ? ""
                                      : textboxobj.arrivalgendec
                                }}
                              </p></a
                              >
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p
                                  class="
                                  extra-small-text
                                  list-width
                                  text-capitalize
                                "
                              >
                                Departure Gendec
                              </p>
                              <a href="#"
                              ><p
                                  class="
                                    extra-small-text
                                    fw-normal
                                    text-decoration-underline
                                  "
                              >
                                {{
                                  textboxobj == undefined
                                      ? ""
                                      : textboxobj.departureGendec
                                }}
                              </p></a
                              >
                            </div>
                          </li>
                          <li class="mb-lg-5 mb-3">
                            <div class="d-flex align-items-baseline">
                              <p
                                  class="
                                  extra-small-text
                                  list-width
                                  text-capitalize
                                "
                              >
                                Other Documents
                              </p>
                              <p class="extra-small-text fw-normal">
                                {{
                                  textboxobj == undefined
                                      ? ""
                                      : textboxobj.otherDocuments
                                }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p
                                  class="
                                  extra-small-text
                                  list-width
                                  text-capitalize
                                "
                              >
                                remarks
                              </p>
                              <p class="extra-small-text fw-normal">
                                {{ obj.remarks }}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-check terms">
                <label class="checked-container text-capitalize"
                >By submitting this form, you are agreeing to our
                  <router-link to="/privacy-policy">Terms and Conditions</router-link>
                  <input
                      type="checkbox"
                      value="1"
                      name="radio"
                      @change="check($event)"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="form-footer">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-block">
            <router-link
                to="/general-aviation-form5"
                class="light-button d-inline-block"
            >back
            </router-link
            >
          </div>
          <div class="d-block">
            <button
                @click="submitData()"
                class="beige-button d-inline-block"
                :disabled="disabled ? false : true"
            >
              submit application
            </button>

            <!-- <router-link to="/general-aviation-thankyou"  @click="submitData()"  class="beige-button d-inline-block">submit application</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "@fortawesome/fontawesome-free/js/all.js";
import configs from "../constants";

export default {
  mounted() {
    window.scrollTo(0, 0);
    const obj = JSON.parse(localStorage.data);
    console.log("obj",obj);
  },
  data() {
    var obj1 = JSON.parse(localStorage.data);
    //console.log(obj1);
    return {
      notFormValid: true,
      obj: JSON.parse(localStorage.data),
      selectedservice: obj1.formserviceoption.filter((o1) =>
          obj1.services.some((o2) => o1.id === o2)
      ),
      /*
      fromairport: obj1.airportoptions.filter(
        (element) => element.id == obj1.arriving_from_airport
      ),

      toairport: obj1.airportoptions.filter(
        (element) => element.id == obj1.departure_to_airport
      ),
      opcountry: obj1.countriesoptions.filter(
        (element) => element.id == obj1.operator_country
      ),
      agcountry: obj1.countriesoptions.filter(
        (element) => element.id == obj1.agent_country
      ),
      */
      textboxobj:
          localStorage.textboxdata != undefined
              ? JSON.parse(localStorage.textboxdata)
              : undefined,
      disabled: false,
    };
  },
  methods: {
    using_agent() {
      this.is_using_agent = true;
    },
    check(e) {
      this.disabled = e.target.checked;
    },
    async submitData() {
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*'
        },
      };
      const obj = JSON.parse(localStorage.data);
      console.log("obj",obj);
      const response = await axios
          .post(
              configs.base_url + "/api/general-aviation",
              obj,
              axiosConfig
          )
          .then((res) => {
            localStorage.setItem('aviation_user_email', obj.operator_email)
            localStorage.removeItem("data");
            localStorage.removeItem("textboxdata");
            window.location.href = "/general-aviation-thankyou";
          })
          .catch((err) => {
            toastr.error(err.message);
          });
      //debugger;
      //   if(response.status == 200)
      //   {
      //     debugger;
      //       toastr.success(response.data.message);
      //       window.location.href=  "/general-aviation-thankyou";
      //       localStorage.removeItem("data");
      //       localStorage.removeItem("textboxdata");
      //   }
    },
  },
};
</script>
<style>
.detail-section {
  padding-bottom: 50px;
}

.accordian-ul > ul > li:not(:last-child) {
  padding-bottom: 50px;
}

.detail-section .accordion-item {
  border-top: 1px solid #011e41 !important;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0px !important;
}

.detail-section .accordion-item:last-child {
  border-bottom: 1px solid #011e41 !important;
}

/* .detail-section .detail-section-header{display:flex; justify-content:space-between; margin-bottom:20px;} */
.detail-section .detail-section-title {
  font-family: "Lora";
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  color: #011e41;
}

.details-list ul li {
  margin-bottom: 10px;
}

.detail-section .accordion-button:not(.collapsed) {
  color: #091f40;
  background-color: transparent;
  box-shadow: none;
}

.detail-section .list-width {
  width: 214px;
  margin-right: 51px;
}

.general-form .detail-section .accordion-button:not(.collapsed)::after {
  background-image: url("../../assets/images/icons/accordian-icon.svg") !important;
  /* transform: rotate(-180dg) */
}

.general-form .detail-section .accordion-button::after {
  background-image: url("../../assets/images/icons/accordian-icon.svg") !important;
}

@media (max-width: 567px) {
  .w-p {
    width: 110px;
  }

  .detail-section .detail-section-title {
    font-size: 16px;
    line-height: 20px;
  }

  .extra-small-text {
    font-size: 14px;
    line-height: 20px;
  }
}

@media (max-width: 467px) {
  .mobile-col {
    flex-direction: column;
  }
}
</style>
