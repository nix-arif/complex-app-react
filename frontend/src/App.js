import './App.css';

function App() {
	return (
		<div classNameName="App">
			<header className="header-bar mb-3">
				<div className="container d-flex flex-column flex-md-row align-items-center p-3">
					<h4 className="my-0 mr-md-auto font-weight-normal">
						<a href="/" className="text-white">
							OurApp
						</a>
					</h4>
					<form action="#" method="POST" className="mb-0 pt-2 pt-md-0">
						<div className="row align-items-center">
							<div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
								<input
									name="username"
									className="form-control form-control-sm input-dark"
									type="text"
									placeholder="Username"
									autocomplete="off"
								/>
							</div>
							<div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
								<input
									name="password"
									className="form-control form-control-sm input-dark"
									type="password"
									placeholder="Password"
								/>
							</div>
							<div className="col-md-auto">
								<button className="btn btn-primary btn-sm">Sign In</button>
							</div>
						</div>
					</form>
				</div>
			</header>
			{/* <!-- header ends here --> */}

			<div className="container py-md-5">
				<div className="row align-items-center">
					<div className="col-lg-7 py-3 py-md-5">
						<h1 className="display-3">Remember Writing?</h1>
						<p className="lead text-muted">
							Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
							posts that are reminiscent of the late 90&rsquo;s email forwards?
							We believe getting back to actually writing is the key to enjoying
							the internet again.
						</p>
					</div>
					<div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
						<form action="#" method="POST" id="registration-form">
							<div className="form-group">
								<label for="username-register" className="text-muted mb-1">
									<small>Username</small>
								</label>
								<input
									name="username"
									id="username-register"
									className="form-control"
									type="text"
									placeholder="Pick a username"
									autocomplete="off"
								/>
							</div>

							<div className="form-group">
								<label for="email-register" className="text-muted mb-1">
									<small>Email</small>
								</label>
								<input
									name="email"
									id="email-register"
									className="form-control"
									type="text"
									placeholder="you@example.com"
									autocomplete="off"
								/>
							</div>

							<div className="form-group">
								<label for="password-register" className="text-muted mb-1">
									<small>Password</small>
								</label>
								<input
									name="password"
									id="password-register"
									className="form-control"
									type="password"
									placeholder="Create a password"
								/>
							</div>

							<button
								type="submit"
								className="py-3 mt-4 btn btn-lg btn-success btn-block"
							>
								Sign up for OurApp
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* <!-- footer begins --> */}
			<footer className="border-top text-center small text-muted py-3">
				<p className="m-0">
					Copyright &copy; 2019{' '}
					<a href="/" className="text-muted">
						OurApp
					</a>
					. All rights reserved.
				</p>
			</footer>

			<script
				src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
				integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
				crossorigin="anonymous"
			></script>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
				integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
				crossorigin="anonymous"
			></script>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
				integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
				crossorigin="anonymous"
			></script>
			<script>$('[data-toggle="tooltip"]').tooltip()</script>
		</div>
	);
}

export default App;
