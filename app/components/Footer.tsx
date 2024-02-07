const Footer = () => {
  return (
    <>
      <div className="container bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-5 w-[90%] m-auto">
          <div className="mt-4 mr-3">
            <img src="img/LogoCSW.png" width="120" alt="" />
            <p className="mt-4">
              Website untuk belajar seputar sekolah kedinasan bersama mentor -
              mentor yang berpengalaman
            </p>
          </div>

          <div className="mt-4 text-left">
            <p className="font-medium text-lg mb-3">COMPANY</p>
            <p>Privacy</p>
            <p>Hubungi Kami</p>
            <p>Tentang Kami</p>
            <p>Mentor</p>
          </div>

          <div className="mt-4 text-left">
            <p className="font-medium text-lg mb-3">PRODUCT</p>
            <p>Paket Bimbel</p>
            <p>Modul</p>
            <p>Blockchain</p>
          </div>

          <div className="mt-4 text-left">
            <p className="font-medium text-lg mb-3">SUPPORT</p>
            <p>FAQ</p>
            <p>Support 24/7</p>
            <p>Glosary</p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-lg mb-3">Office</p>
            <div className="mb-2">
              <a className="text-dark">
                <img
                  className="inline-block mr-2"
                  src="img/ic_pt.png"
                  width="24"
                  alt=""
                />
                <h1 className="inline-block"></h1>PT. Civil Servant Warrior
              </a>
            </div>
            <div className="mb-2">
              <a className="text-dark">
                <img
                  className="inline-block mr-2"
                  src="img/ic_place.png"
                  width="24"
                  alt=""
                />
                <h1 className="inline-block">Jakarta, Indonesia</h1>
              </a>
            </div>
            <div className="mb-2">
              <a
                href="http://wa.me/6289603022660"
                target="_blank"
                className="text-dark"
              >
                <img
                  className="inline-block mr-2"
                  src="img/ic_phone.png"
                  width="24"
                  alt=""
                />
                <h1 className="inline-block">+62 896 0302 2660</h1>
              </a>
            </div>
            <div className="mb-2">
              <a
                href="mailto:&nbsp wstatistical@gmail.com"
                target="_blank"
                className="text-dark"
              >
                <img
                  className="inline-block mr-2"
                  src="img/ic_email.png"
                  width="24"
                  alt=""
                />
                <h1 className="inline-block">wstatistical@gmail.com</h1>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-pl-primary pt-3 pb-1 mt-5">
          <div className="w-[97%] m-auto container flex justify-between">
            <img
              src="img/LogoCSW.png"
              width="38"
              // height="30"
              alt=""
              className="block hidden sm:block"
            />

            <p className="m-auto text-white pt-1">
              © 2022 Civil Servant Warrior. All rights reserved{" "}
            </p>

            <div className="hidden sm:block">
              <a
                target="_blank"
                href="https://www.instagram.com/civilservantwarrior/"
              >
                <img
                  className="inline-block mr-2"
                  src="img/ic_ig.png"
                  width="38"
                  // height="30"
                  alt="Instagram CSW"
                />
              </a>
              <a target="_blank" href="http://wa.me/6289603022660">
                <img
                  className="inline-block"
                  src="img/ic_wa.png"
                  width="38"
                  // height="30"
                  alt="WhatsApp CSW"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
