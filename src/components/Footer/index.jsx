import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer__section">
            <div className='footer__horiz'>
                <div className="footer__info h5">
                    <div className="footer__logo">LOGO</div>
                    <div className="footer__text">Open daily</div>
                    <div className="footer__text">spa and massage</div>
                </div>
                <div className="footer__info">
                    <a href="tel:+78142332211">
                        <div className="footer__text">+4209898460</div>
                    </a>
                    <a href="mailto:vlad@webref.ru">
                        <div className="footer__text">uihdwuh@mail</div>
                    </a>
                    <a href="https://maps.app.goo.gl/FJ2Sxjw3MSF4TfNj9">
                        <div className="footer__text">Address</div>
                    </a>
                </div>
            </div>
            <div className="footer__base">
                <div className="footer__base-text h6">© 2024,AVALON CLUB</div>
                <div className="footer__base-text h7">
                    Tento web není nabídka sexuálních služeb. Server slouží jako inzerce jednotlivých masérek. Podmínkou inzerce je pronajmutí prostoru
                    masážního salonu. Vision One s.r.o. identifikační číslo: 0570305
                </div>
            </div>
        </div>
    );
};

export default Footer;
