import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer__section">
            <div className="footer__horiz">
                <div className="footer__info">
                    <div className="footer__text h5">CONTACTS:</div>
                    <a href="tel:+420776285070">
                        <div className="footer__text">+420 776 285 070</div>
                    </a>
                    <a href="mailto:vlad@webref.ru">
                        <div className="footer__text">senchurinaa@gmail.com</div>
                    </a>
                    <a href="https://maps.app.goo.gl/A9r9N88hjq196snM7">
                        <div className="footer__text">Kaprova 42/14, 11000 Praha</div>
                    </a>
                </div>
                <div className="footer__info footer__info__logo h5">
                    <div className="footer__text__opening">
                    <div className="footer__text h6">Marketing</div>
                    <div className="footer__text"> ANNASEN</div>
                    </div>
                    <div className="footer__text h6">international</div>
                </div>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9132299454163!2d14.415888275552975!3d50.08791141340251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e8e9dba22b%3A0xe7ba3586f59bb968!2zS2Fwcm92YSA0Mi8xNCwgMTEwIDAwIFN0YXLDqSBNxJtzdG8sINCn0LXRhdC40Y8!5e0!3m2!1sru!2sru!4v1734174408956!5m2!1sru!2sru" width="200" height="150"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {<div className="footer__base">
                <div className="footer__base-text h7">ANNASEN International s.r.o., IČO: 22278486</div>
                <div className="footer__base-text h8">
                Predmēt podnikáni:
Obory Činnosti:
Výroba, obchod a sluby neuvedené v prilohách 1 az 3 zivnostenského zákona
Zprostredkování obchodu a sluzeb
Velkoobchod a maloobchod
Nakup, prodej, správa a údriba nemovitosti
Pronájem a pújcováni veci movitých
Poradenská a konzultani cinnost, zpracovni odbornych studií a posudkú
Reklamni Činnost, marketing, mediálni zastoupení
Prekladatelská a tlumonická Činnost
Mimoskolni vychova a vzdeláváni, porádáni kurzu, skolení, veetne lektorské cinnosti
Provozovni kulturnich, kulturne-vzdelávacich a zábavnich zarízeni, porádání
kulturnich produkci, zábav, vystav, veletrhủ, prehlidek, prodejních a obdobných akci
                </div>
            </div>}
        </div>
    );
};

export default Footer;
