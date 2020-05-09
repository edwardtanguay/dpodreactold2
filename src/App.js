import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaListAlt } from 'react-icons/fa';

function App() {
	return (
		<div className="container">
			<ul class="nav nav-pills">
				<li className="nav-item"><a href="#" className="nav-link">Welcome</a></li>
				<li className="nav-item"><a href="#" className="nav-link active">Info</a></li>
				<li className="nav-item"><a href="#" className="nav-link">Create Item</a></li>
				<li className="nav-item"><a href="#" className="nav-link">Create Page</a></li>
				<li className="nav-item"><a href="#" className="nav-link">About</a></li>
			</ul>

			<article>
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p class="lead font-weight-bold font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corporis, laboriosam maiores quo distinctio illo suscipit sed deleniti nisi. Magnam ipsam accusamus error mollitia odit facere, consectetur facilis doloremque incidunt.</p>
				<p>Eaque adipisci earum sit magnam sunt, deserunt optio distinctio dignissimos excepturi reprehenderit illum accusamus dolore, officiis, maiores provident minus eveniet quidem! Accusamus, dignissimos ullam animi quibusdam vitae illo iste quia.</p>
				<h2>Lorem ipsum dolor sit amet, consectetur.</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea enim voluptatem, pariatur, accusantium facilis adipisci animi culpa ipsa dolorem obcaecati amet quod, praesentium molestias esse tenetur repudiandae excepturi quo quas minus! Esse quibusdam exercitationem reprehenderit quis iste odio at ratione, perspiciatis error modi in voluptatum inventore deleniti doloribus eaque?</p>
				<p>Est deserunt voluptas, ut iure dicta excepturi accusamus, ex at ipsum consequuntur, reiciendis ad natus nisi optio non odit neque explicabo possimus perferendis rem esse qui quisquam consequatur. Consectetur consequuntur praesentium doloribus omnis quia commodi iste qui nisi doloremque ipsa. Ad dicta, modi quis, quae aperiam debitis officiis natus facere!</p>
				<p>Quos quisquam aliquam omnis. Dolore aut non quidem velit ea, expedita praesentium, delectus similique veritatis eaque nobis tempore qui, laboriosam rerum iste dolorem suscipit molestias placeat. Consequatur quos totam vitae, minima quae, quas sed et eveniet deleniti, debitis officiis maxime aliquam mollitia cum repellendus est tempora. Quas qui aliquam sit!</p>
				<p>Sint facilis odit repudiandae reprehenderit ratione eligendi doloribus, illo incidunt tempore pariatur consequatur beatae dolorem explicabo tenetur esse nemo cumque maiores repellendus consectetur officiis praesentium sed architecto eum. Iure totam rerum officiis explicabo saepe nam, magnam molestiae sequi voluptate tempore, qui, corrupti. Natus velit repellat, non mollitia, magnam nostrum eum.</p>
				<blockquote >
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, cupiditate?</p>
					<footer>Hans Surless dans <cite>La Revue très sérieuse</cite></footer>
				</blockquote>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae quidem saepe minima laborum voluptatum voluptate consequatur, dignissimos odio. Quam labore nostrum eos suscipit ad magnam vero cum enim optio!</p>
				<p>Deleniti eligendi ducimus facere facilis, cumque id obcaecati libero adipisci voluptate at numquam totam reprehenderit suscipit. Est numquam dignissimos rem iste doloribus, consequuntur quas, libero, culpa necessitatibus voluptatibus aut quod.</p>
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Inventore eius impedit repellat unde.
            <ul>
							<li>Lorem ipsum dolor sit amet, consectetur.</li>
							<li>Eius tenetur quibusdam labore, iure qui!</li>
							<li>Obcaecati dolorem mollitia beatae fugiat id.</li>
							<li>Officia asperiores exercitationem eius veniam fugit.</li>
							<li>Ea minima quidem, sit. Sunt, blanditiis.</li>
						</ul>
					</li>
					<li>Eum aliquid est error vel.</li>
					<li>Incidunt necessitatibus obcaecati reiciendis porro!</li>
				</ul>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet molestias, provident ad! Minima voluptatem doloremque repellendus temporibus molestiae cum praesentium in non delectus, sapiente a aut, neque explicabo laudantium placeat?</p>
				<p>Officia perferendis quis quas quo, quidem earum optio! Magni non magnam vero libero, accusantium tempora deleniti quis excepturi minima quo porro dolorum maiores sit, amet unde tenetur. Saepe, nostrum, voluptas.</p>
				<table>
					<caption>Liste des utilisateurs</caption>
					<thead>
						<tr>
							<th>Lorem ipsum.</th>
							<th>Magni, inventore?</th>
							<th>Itaque, alias.</th>
						</tr>
					</thead>
					<tr>
						<td>Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
						<td>Similique reprehenderit accusamus totam rerum porro, dolorum.</td>
						<td>Porro libero animi beatae, sed natus, officiis.</td>
					</tr>
					<tr>
						<td>Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
						<td>Repudiandae, soluta. Excepturi aspernatur corporis animi magnam.</td>
						<td>Similique laudantium culpa ipsum maxime velit dolore!</td>
					</tr>
					<tr>
						<td>Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
						<td>Illum modi iste, recusandae voluptate itaque et.</td>
						<td>Minus fuga molestias, alias nulla mollitia iure.</td>
					</tr>
				</table>
			</article>
		</div>
	);
}

export default App;
