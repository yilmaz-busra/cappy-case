import React from "react";
import { Link } from "react-router-dom";

function End() {
  return (
    <div>
      <div>
        <Link to="/Share">
          <img className="cappyorgan" src="mi2.png" alt="Cappy_organizma" />
        </Link>
      </div>
      <div>
        <ul>
          VİTAMİN DEPOM
          <li> Elma: C-B-E-A vitaminleri</li>
          <li> Vişne: C-A-K </li>
          <li>Şeftali: C-A-E-K</li>
          <li>Portakal: C-A-B-K</li>
        </ul>
        Bu posada bulunan vitaminler, vücudunuz için önemli besin maddeleridir
        ve sağlıklı bir diyetin de bir parçası olarak tüketilmelidir. Bunların
        hepsi beni oluşturuyor!
      </div>
    </div>
  );
}

export default End;
