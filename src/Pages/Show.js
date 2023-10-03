import React from "react"
import { Link } from "react-router-dom"

function Show() {
	return (
		<div>
			<div className="">
				<Link className="img-container" to="/End">
					<img className="mikros " src="incele.png" alt="mikroskop" />
				</Link>
				<p className="textContentStyle">
					İşte senin için bir mikroskop! Lezzet ve vitamin dolu
					yararlı bir canavar olduğumu anlayabilmek için içerik
					listemi oluşturuyorum.
				</p>
			</div>
		</div>
	)
}

export default Show
