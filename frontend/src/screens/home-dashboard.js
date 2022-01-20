const HomeDashboard = () => {
	return (
		<div>
			<header className="header-bar mb-3">
				<div className="container d-flex flex-column flex-md-row align-items-center p-3">
					<h4 className="my-0 mr-md-auto font-weight-normal">
						<a href="/" className="text-white">
							OurApp
						</a>
					</h4>
					<div className="flex-row my-3 my-md-0">
						<a
							href="/"
							className="text-white mr-2 header-search-icon"
							title="Search"
							data-toggle="tooltip"
							data-placement="bottom"
						>
							<i className="fas fa-search"></i>
						</a>
						<span
							className="text-white mr-2 header-chat-icon"
							title="Chat"
							data-toggle="tooltip"
							data-placement="bottom"
						>
							<i className="fas fa-comment"></i>
						</span>
						<a href="/" className="mr-2">
							<img
								alt="avatar"
								title="My Profile"
								dataToggle="tooltip"
								dataPlacement="bottom"
								style={{ width: '32px', height: '32px', borderRadius: '16px' }}
								src="https://gravatar.com/avatar/f64fc44c03a8a7eb1d52502950879659?s=128"
							/>
						</a>
						<a className="btn btn-sm btn-success mr-2" href="#">
							Create Post
						</a>
						<form action="#" method="POST" className="d-inline">
							<button className="btn btn-sm btn-secondary">Sign Out</button>
						</form>
					</div>
				</div>
			</header>
			{/* <!-- header ends here --> */}

			<div className="container py-md-5 container--narrow">
				<div className="text-center">
					<h2>
						Hello <strong>username</strong>, your feed is empty.
					</h2>
					<p className="lead text-muted">
						Your feed displays the latest posts from the people you follow. If
						you don&rsquo;t have any friends to follow that&rsquo;s okay; you
						can use the &ldquo;Search&rdquo; feature in the top menu bar to find
						content written by people with similar interests and then follow
						them.
					</p>
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
};

export default HomeDashboard;
