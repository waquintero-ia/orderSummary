const Card = () => {
  return(
    <>
      <div className="container">
        <div className="content w-327 min-h-567 bg-white rounded-[20px] overflow-hidden drop-shadow-custom-2 xl:w-450 xl:min-h-697">
          <div className="img_content w-full h-160 xl:h-220">
            <img src="./images/illustration-hero.svg" alt="women enjoy listen music" loading="lazy" decoding="async"/>
          </div>
          <section className="section py-8 px-6 flex flex-col gap-6 justify-center items-center xl:p-12 xl:gap-5">
            <div className="section_title flex flex-col gap-4 justify-center items-center w-full xl:gap-[22px]">
              <h1 id="os1" className="text-22 font-black text-grey-2 leading-29 xl:text-28 xl:leadint-37">
                Order Summary
              </h1>
              <div className="w-250 text-center text-15 leading-25 font-medium xl:text-16 xl:leading-26 xl:w-354">
                <p>
                  You can now listen to millions of 
                  songs, audiobooks, and podcasts on
                  any device anywhere you like!
                </p>
              </div>
            </div>
            <div className="section_plan bg-grey-3 w-full min-h-81 rounded-[11px] flex justify-between items-center px-4 xl:min-h-[98px] xl:px-6">
              <div className="plan_description flex justify-items-center items-center gap-5">
                <div className="descrition_image_container w-12 h-12">
                  <img src="./images/icon-music.svg" alt="musical note" loading="lazy" decoding="async"/>
                </div>
                <div className="description_type flex flex-col gap-3 min-h-10">
                  <p className="text-14 font-black leading-19 text-grey-2 xl:text-16 xl:leading-21">
                    Annual Plan
                  </p>
                  <p className="text-14 font-medium leading-19 xl:text-16 xl:leading-21">
                    $59.99/year
                  </p>
                </div>
              </div>
              <a className="text-13 leading-17 font-bold underline text-blue-2 xl:text-14 hover:text-purple hover:no-underline focus:text-purple focus:no-underline active:text-purple active:no-underline" href="#" tabIndex={0}>
                Change
              </a>
            </div>

            <a className="section_payment w-full min-h-50 bg-blue-2 rounded-[11px] flex justify-center items-center text-15 font-black text-white leading-20 drop-shadow-custom xl:mt-[12px] hover:bg-purple focus:bg-purple active:bg-purple" role="button" href="#">
              Proceed to Payment
            </a>

            <a className="section_cancel_order text-15 font-black text-grey leading-20 drop-shadow-custom xl:mt-[12px] hover:text-grey-2 active:text-grey-2 focus:text-grey-2" role="button" href="#">
              Cancel Order
            </a>
          </section>
        </div>
      </div>
    </>
  )
}

export default Card