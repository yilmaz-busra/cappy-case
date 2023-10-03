import React from "react"
import { Link } from "react-router-dom"

function End() {
	return (
		<div>
			<div>
				<Link className="img-container" to="/Share">
					<img
						className="cappyorgan"
						src="mi2.png"
						alt="Cappy_organizma"
					/>
				</Link>
			</div>
			<div>
				<p className="head">VİTAMİN DEPOM</p>
				<ul>
					<li className="textContentStyle">
						{" "}
						Elma: C-B-E-A vitaminleri
					</li>
					<li className="textContentStyle"> Vişne: C-A-K </li>
					<li className="textContentStyle">Şeftali: C-A-E-K</li>
					<li className="textContentStyle">Portakal: C-A-B-K</li>
				</ul>
				<p className="textContentStyle">
					Bu posada bulunan vitaminler, vücudunuz için önemli besin
					maddeleridir ve sağlıklı bir diyetin de bir parçası olarak
					tüketilmelidir. Bunların hepsi beni oluşturuyor!
				</p>
			</div>
		</div>
	)
}

export default End
