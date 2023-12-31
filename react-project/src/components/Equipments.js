import React, { useEffect } from "react";
import "./Equipments.css"
import AOS from "aos";
import "aos/dist/aos.css";
export const Equipments = () => {
    const equips = [
        "Chest Press Machine",
"Seated Dip Machine",
"Chest Fly Machine",
"Bench Press",
"Incline Bench Press",
"Decline Bench Press",
"Adjustable Bench",
"Olympic Weight Bench"
    ]
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    return (
      <div id="equipments-page">
        <div className="main-div">
          <div className="d-flex flex-row justify-content-center">
            <div>
              {equips.map((equip) => (
                <div data-aos="slide-up" className="list-order">
                  <h3 className="equip-list">{equip}</h3>
                </div>
              ))}
            </div>

            <div className="carousels" data-aos="slide-left">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner rounded-3">
                  <div class="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      class="d-block w-100"
                      alt=""
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      class="d-block w-100"
                      alt=""
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                      class="d-block w-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
