<script>
	import Header from '$lib/header/Header.svelte';
	import Loader from '$lib/Loader/index.svelte';
	import '../app.css';
	import { createClient, setClient } from '@urql/svelte';
	import { writable } from 'svelte/store';

	const client = createClient({
		url: 'http://127.0.0.1:8000/graphql/',
		// fetchOptions: () => {
		// 	const token = getToken();
		// 	return {
		// 		headers: { authorization: token ? `Bearer ${token}` : '' },
		// 	};
		// },
	});
	setClient(client);

	export let store = writable(null);

	console.log();
</script>
<!--<Loader />-->

<!-- PAGE LOADER -->
<!--<div class="page-loader">-->
<!--	&lt;!&ndash; PAGE LOADER DECORATION &ndash;&gt;-->
<!--	<div class="page-loader-decoration">-->
<!--		&lt;!&ndash; ICON LOGO &ndash;&gt;-->
<!--		<svg class="icon-logo" viewBox="0 0 28 40" preserveAspectRatio="xMinYMin meet">-->
<!--			<path d="M27.18,24.038c-0.141-0.095-0.244-0.146-0.244-0.146l-0.005-0.049C25.489,22.783,23.103,22,23.103,22c1.542,0,2.582-0.563,3.501-1.334c-0.049-0.055,0.7-0.666,0.7-0.666c0.146-8.251-4.477-12.745-7.001-14.667C18.15,9.564,16.802,14,16.802,14c-0.219-4.426,0.243-8.072,0.7-10.667c-0.85-0.452-1.956-0.698-2.296-1.537C14.865,0.957,14.015,0,14.015,0L14,0.014L13.985,0c0,0-0.85,0.957-1.19,1.796c-0.34,0.839-1.445,1.085-2.295,1.537C10.957,5.928,11.418,9.574,11.2,14c0,0-1.349-4.436-3.501-8.667C5.174,7.255,0.551,11.749,0.697,20c0,0,0.75,0.611,0.701,0.666C2.316,21.437,3.357,22,4.898,22c0,0-2.387,0.783-3.829,1.844l-0.005,0.049c0,0-0.104,0.051-0.244,0.146c-0.48,0.397-0.806,0.828-0.819,1.269c-0.023,0.521,0.263,1.181,1.233,1.973c0,0,0.136,9.259,9.69,11.29c0,0,0.212,0.815,0.975,1.431L14,38l2.102,2c0.763-0.615,0.975-1.431,0.975-1.431c9.555-2.031,9.689-11.29,9.689-11.29c0.971-0.792,1.256-1.451,1.233-1.973C27.986,24.866,27.659,24.436,27.18,24.038z M4.198,26c2.362,0.121,3.517,1.473,5.602,4c0.799,0.969,2.059,0.83,2.059,0.83L11.899,34C5.249,34,4.198,26,4.198,26z M14,28.162l-2.97-2.828l2.101-2.001l-2.101-2l2.101-2l-2.101-2L14,14.505l2.972,2.828l-2.102,2l2.102,2l-2.102,2l2.102,2.001L14,28.162z M16.102,34l0.041-3.17c0,0,1.26,0.139,2.059-0.83c2.085-2.527,3.239-3.879,5.602-4C23.803,26,22.752,34,16.102,34z M13.3,26h1.4v-1.333h-1.4V26z M13.3,22h1.4v-1.334h-1.4V22z M13.3,18h1.4v-1.333h-1.4V18z"/>-->
<!--		</svg>-->
<!--		&lt;!&ndash; /ICON LOGO &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /PAGE LOADER DECORATION &ndash;&gt;-->

<!--	&lt;!&ndash; PAGE LOADER INFO &ndash;&gt;-->
<!--	<div class="page-loader-info">-->
<!--		&lt;!&ndash; PAGE LOADER INFO TITLE &ndash;&gt;-->
<!--		<p class="page-loader-info-title">Vikinger</p>-->
<!--		&lt;!&ndash; /PAGE LOADER INFO TITLE &ndash;&gt;-->

<!--		&lt;!&ndash; PAGE LOADER INFO TEXT &ndash;&gt;-->
<!--		<p class="page-loader-info-text">Loading...</p>-->
<!--		&lt;!&ndash; /PAGE LOADER INFO TEXT &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /PAGE LOADER INFO &ndash;&gt;-->

<!--	&lt;!&ndash; PAGE LOADER INDICATOR &ndash;&gt;-->
<!--	<div class="page-loader-indicator loader-bars">-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--		<div class="loader-bar"></div>-->
<!--	</div>-->
<!--	&lt;!&ndash; /PAGE LOADER INDICATOR &ndash;&gt;-->
<!--</div>-->
<!-- /PAGE LOADER -->

<!-- NAVIGATION WIDGET -->
<!--<nav id="navigation-widget-small" class="navigation-widget navigation-widget-desktop closed sidebar left delayed">-->
<!--	&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--	<a class="user-avatar small no-outline online" href="profile-timeline.html">-->
<!--		&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--		<div class="user-avatar-content">-->
<!--			&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--			<div class="hexagon-image-30-32" data-src="../../static/img/avatar/01.jpg"></div>-->
<!--			&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--		&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--		<div class="user-avatar-progress">-->
<!--			&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--			<div class="hexagon-progress-40-44"></div>-->
<!--			&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--		&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--		<div class="user-avatar-progress-border">-->
<!--			&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--			<div class="hexagon-border-40-44"></div>-->
<!--			&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--		&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--		<div class="user-avatar-badge">-->
<!--			&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--			<div class="user-avatar-badge-border">-->
<!--				&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--				<div class="hexagon-22-24"></div>-->
<!--				&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--			&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--			<div class="user-avatar-badge-content">-->
<!--				&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--				<div class="hexagon-dark-16-18"></div>-->
<!--				&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--			&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--			<p class="user-avatar-badge-text">24</p>-->
<!--			&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--	</a>-->
<!--	&lt;!&ndash; /USER AVATAR &ndash;&gt;-->

<!--	&lt;!&ndash; MENU &ndash;&gt;-->
<!--	<ul class="menu small">-->
<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="newsfeed.html" data-title="Newsfeed">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-newsfeed">-->
<!--					<use xlink:href="#svg-newsfeed"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="overview.html" data-title="Overview">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-overview">-->
<!--					<use xlink:href="#svg-overview"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="groups.html" data-title="Groups">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-group">-->
<!--					<use xlink:href="#svg-group"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="members.html" data-title="Members">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-members">-->
<!--					<use xlink:href="#svg-members"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="badges.html" data-title="Badges">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-badges">-->
<!--					<use xlink:href="#svg-badges"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="quests.html" data-title="Quests">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-quests">-->
<!--					<use xlink:href="#svg-quests"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="streams.html" data-title="Streams">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-streams">-->
<!--					<use xlink:href="#svg-streams"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="events.html" data-title="Events">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-events">-->
<!--					<use xlink:href="#svg-events"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="forums.html" data-title="Forums">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-forums">-->
<!--					<use xlink:href="#svg-forums"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link text-tooltip-tfr" href="marketplace.html" data-title="Marketplace">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-marketplace">-->
<!--					<use xlink:href="#svg-marketplace"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->
<!--	</ul>-->
<!--	&lt;!&ndash; /MENU &ndash;&gt;-->
<!--</nav>-->
<!-- /NAVIGATION WIDGET -->

<!-- NAVIGATION WIDGET -->
<!--<nav id="navigation-widget" class="navigation-widget navigation-widget-desktop sidebar left hidden" data-simplebar>-->
<!--	&lt;!&ndash; NAVIGATION WIDGET COVER &ndash;&gt;-->
<!--	<figure class="navigation-widget-cover liquid">-->
<!--		<img src="../../static/img/cover/01.jpg" alt="cover-01">-->
<!--	</figure>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET COVER &ndash;&gt;-->

<!--	&lt;!&ndash; USER SHORT DESCRIPTION &ndash;&gt;-->
<!--	<div class="user-short-description">-->
<!--		&lt;!&ndash; USER SHORT DESCRIPTION AVATAR &ndash;&gt;-->
<!--		<a class="user-short-description-avatar user-avatar medium" href="profile-timeline.html">-->
<!--			&lt;!&ndash; USER AVATAR BORDER &ndash;&gt;-->
<!--			<div class="user-avatar-border">-->
<!--				&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--				<div class="hexagon-120-132"></div>-->
<!--				&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR BORDER &ndash;&gt;-->

<!--			&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--			<div class="user-avatar-content">-->
<!--				&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--				<div class="hexagon-image-82-90" data-src="../../static/img/avatar/01.jpg"></div>-->
<!--				&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--			&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--			<div class="user-avatar-progress">-->
<!--				&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--				<div class="hexagon-progress-100-110"></div>-->
<!--				&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--			&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--			<div class="user-avatar-progress-border">-->
<!--				&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--				<div class="hexagon-border-100-110"></div>-->
<!--				&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--			&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--			<div class="user-avatar-badge">-->
<!--				&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--				<div class="user-avatar-badge-border">-->
<!--					&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--					<div class="hexagon-32-36"></div>-->
<!--					&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--				&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--				<div class="user-avatar-badge-content">-->
<!--					&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--					<div class="hexagon-dark-26-28"></div>-->
<!--					&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--				&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--				<p class="user-avatar-badge-text">24</p>-->
<!--				&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--		</a>-->
<!--		&lt;!&ndash; /USER SHORT DESCRIPTION AVATAR &ndash;&gt;-->

<!--		&lt;!&ndash; USER SHORT DESCRIPTION TITLE &ndash;&gt;-->
<!--		<p class="user-short-description-title"><a href="profile-timeline.html">Marina Valentine</a></p>-->
<!--		&lt;!&ndash; /USER SHORT DESCRIPTION TITLE &ndash;&gt;-->

<!--		&lt;!&ndash; USER SHORT DESCRIPTION TEXT &ndash;&gt;-->
<!--		<p class="user-short-description-text"><a href="#">www.gamehuntress.com</a></p>-->
<!--		&lt;!&ndash; /USER SHORT DESCRIPTION TEXT &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /USER SHORT DESCRIPTION &ndash;&gt;-->

<!--	&lt;!&ndash; BADGE LIST &ndash;&gt;-->
<!--	<div class="badge-list small">-->
<!--		&lt;!&ndash; BADGE ITEM &ndash;&gt;-->
<!--		<div class="badge-item">-->
<!--			<img src="../../static/img/badge/gold-s.png" alt="badge-gold-s">-->
<!--		</div>-->
<!--		&lt;!&ndash; /BADGE ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; BADGE ITEM &ndash;&gt;-->
<!--		<div class="badge-item">-->
<!--			<img src="../../static/img/badge/age-s.png" alt="badge-age-s">-->
<!--		</div>-->
<!--		&lt;!&ndash; /BADGE ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; BADGE ITEM &ndash;&gt;-->
<!--		<div class="badge-item">-->
<!--			<img src="../../static/img/badge/caffeinated-s.png" alt="badge-caffeinated-s">-->
<!--		</div>-->
<!--		&lt;!&ndash; /BADGE ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; BADGE ITEM &ndash;&gt;-->
<!--		<div class="badge-item">-->
<!--			<img src="../../static/img/badge/warrior-s.png" alt="badge-warrior-s">-->
<!--		</div>-->
<!--		&lt;!&ndash; /BADGE ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; BADGE ITEM &ndash;&gt;-->
<!--		<a class="badge-item" href="profile-badges.html">-->
<!--			<img src="../../static/img/badge/blank-s.png" alt="badge-blank-s">-->
<!--			&lt;!&ndash; BADGE ITEM TEXT &ndash;&gt;-->
<!--			<p class="badge-item-text">+9</p>-->
<!--			&lt;!&ndash; /BADGE ITEM TEXT &ndash;&gt;-->
<!--		</a>-->
<!--		&lt;!&ndash; /BADGE ITEM &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /BADGE LIST &ndash;&gt;-->

<!--	&lt;!&ndash; USER STATS &ndash;&gt;-->
<!--	<div class="user-stats">-->
<!--		&lt;!&ndash; USER STAT &ndash;&gt;-->
<!--		<div class="user-stat">-->
<!--			&lt;!&ndash; USER STAT TITLE &ndash;&gt;-->
<!--			<p class="user-stat-title">930</p>-->
<!--			&lt;!&ndash; /USER STAT TITLE &ndash;&gt;-->

<!--			&lt;!&ndash; USER STAT TEXT &ndash;&gt;-->
<!--			<p class="user-stat-text">posts</p>-->
<!--			&lt;!&ndash; /USER STAT TEXT &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER STAT &ndash;&gt;-->

<!--		&lt;!&ndash; USER STAT &ndash;&gt;-->
<!--		<div class="user-stat">-->
<!--			&lt;!&ndash; USER STAT TITLE &ndash;&gt;-->
<!--			<p class="user-stat-title">82</p>-->
<!--			&lt;!&ndash; /USER STAT TITLE &ndash;&gt;-->

<!--			&lt;!&ndash; USER STAT TEXT &ndash;&gt;-->
<!--			<p class="user-stat-text">friends</p>-->
<!--			&lt;!&ndash; /USER STAT TEXT &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER STAT &ndash;&gt;-->

<!--		&lt;!&ndash; USER STAT &ndash;&gt;-->
<!--		<div class="user-stat">-->
<!--			&lt;!&ndash; USER STAT TITLE &ndash;&gt;-->
<!--			<p class="user-stat-title">5.7k</p>-->
<!--			&lt;!&ndash; /USER STAT TITLE &ndash;&gt;-->

<!--			&lt;!&ndash; USER STAT TEXT &ndash;&gt;-->
<!--			<p class="user-stat-text">visits</p>-->
<!--			&lt;!&ndash; /USER STAT TEXT &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER STAT &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /USER STATS &ndash;&gt;-->

<!--	&lt;!&ndash; MENU &ndash;&gt;-->
<!--	<ul class="menu">-->
<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="newsfeed.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-newsfeed">-->
<!--					<use xlink:href="#svg-newsfeed"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Newsfeed-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="overview.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-overview">-->
<!--					<use xlink:href="#svg-overview"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Overview-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="groups.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-group">-->
<!--					<use xlink:href="#svg-group"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Groups-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="members.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-members">-->
<!--					<use xlink:href="#svg-members"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Members-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="badges.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-badges">-->
<!--					<use xlink:href="#svg-badges"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Badges-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="quests.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-quests">-->
<!--					<use xlink:href="#svg-quests"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Quests-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="streams.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-streams">-->
<!--					<use xlink:href="#svg-streams"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Streams-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="events.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-events">-->
<!--					<use xlink:href="#svg-events"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Events-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="forums.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-forums">-->
<!--					<use xlink:href="#svg-forums"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Forums-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="marketplace.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-marketplace">-->
<!--					<use xlink:href="#svg-marketplace"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Marketplace-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->
<!--	</ul>-->
<!--	&lt;!&ndash; /MENU &ndash;&gt;-->
<!--</nav>-->
<!-- /NAVIGATION WIDGET -->

<!-- NAVIGATION WIDGET -->
<!--<nav id="navigation-widget-mobile" class="navigation-widget navigation-widget-mobile sidebar left hidden" data-simplebar>-->
<!--	&lt;!&ndash; NAVIGATION WIDGET CLOSE BUTTON &ndash;&gt;-->
<!--	<div class="navigation-widget-close-button">-->
<!--		&lt;!&ndash; NAVIGATION WIDGET CLOSE BUTTON ICON &ndash;&gt;-->
<!--		<svg class="navigation-widget-close-button-icon icon-back-arrow">-->
<!--			<use xlink:href="#svg-back-arrow"></use>-->
<!--		</svg>-->
<!--		&lt;!&ndash; NAVIGATION WIDGET CLOSE BUTTON ICON &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET CLOSE BUTTON &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET INFO WRAP &ndash;&gt;-->
<!--	<div class="navigation-widget-info-wrap">-->
<!--		&lt;!&ndash; NAVIGATION WIDGET INFO &ndash;&gt;-->
<!--		<div class="navigation-widget-info">-->
<!--			&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--			<a class="user-avatar small no-outline" href="profile-timeline.html">-->
<!--				&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--				<div class="user-avatar-content">-->
<!--					&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--					<div class="hexagon-image-30-32" data-src="../../static/img/avatar/01.jpg"></div>-->
<!--					&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--				&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--				<div class="user-avatar-progress">-->
<!--					&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--					<div class="hexagon-progress-40-44"></div>-->
<!--					&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--				&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--				<div class="user-avatar-progress-border">-->
<!--					&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--					<div class="hexagon-border-40-44"></div>-->
<!--					&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--				&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--				<div class="user-avatar-badge">-->
<!--					&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--					<div class="user-avatar-badge-border">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-22-24"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--					&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--					<div class="user-avatar-badge-content">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-dark-16-18"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--					&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--					<p class="user-avatar-badge-text">24</p>-->
<!--					&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--			</a>-->
<!--			&lt;!&ndash; /USER AVATAR &ndash;&gt;-->

<!--			&lt;!&ndash; NAVIGATION WIDGET INFO TITLE &ndash;&gt;-->
<!--			<p class="navigation-widget-info-title"><a href="profile-timeline.html">Marina Valentine</a></p>-->
<!--			&lt;!&ndash; /NAVIGATION WIDGET INFO TITLE &ndash;&gt;-->

<!--			&lt;!&ndash; NAVIGATION WIDGET INFO TEXT &ndash;&gt;-->
<!--			<p class="navigation-widget-info-text">Welcome Back!</p>-->
<!--			&lt;!&ndash; /NAVIGATION WIDGET INFO TEXT &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /NAVIGATION WIDGET INFO &ndash;&gt;-->

<!--		&lt;!&ndash; NAVIGATION WIDGET BUTTON &ndash;&gt;-->
<!--		<p class="navigation-widget-info-button button small secondary">Logout</p>-->
<!--		&lt;!&ndash; /NAVIGATION WIDGET BUTTON &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET INFO WRAP &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->
<!--	<p class="navigation-widget-section-title">Sections</p>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->

<!--	&lt;!&ndash; MENU &ndash;&gt;-->
<!--	<ul class="menu">-->
<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="newsfeed.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-newsfeed">-->
<!--					<use xlink:href="#svg-newsfeed"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Newsfeed-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="overview.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-overview">-->
<!--					<use xlink:href="#svg-overview"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Overview-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="groups.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-group">-->
<!--					<use xlink:href="#svg-group"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Groups-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="members.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-members">-->
<!--					<use xlink:href="#svg-members"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Members-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="badges.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-badges">-->
<!--					<use xlink:href="#svg-badges"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Badges-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="quests.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-quests">-->
<!--					<use xlink:href="#svg-quests"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Quests-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="streams.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-streams">-->
<!--					<use xlink:href="#svg-streams"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Streams-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="events.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-events">-->
<!--					<use xlink:href="#svg-events"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Events-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="forums.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-forums">-->
<!--					<use xlink:href="#svg-forums"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Forums-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->

<!--		&lt;!&ndash; MENU ITEM &ndash;&gt;-->
<!--		<li class="menu-item">-->
<!--			&lt;!&ndash; MENU ITEM LINK &ndash;&gt;-->
<!--			<a class="menu-item-link" href="marketplace.html">-->
<!--				&lt;!&ndash; MENU ITEM LINK ICON &ndash;&gt;-->
<!--				<svg class="menu-item-link-icon icon-marketplace">-->
<!--					<use xlink:href="#svg-marketplace"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /MENU ITEM LINK ICON &ndash;&gt;-->
<!--				Marketplace-->
<!--			</a>-->
<!--			&lt;!&ndash; /MENU ITEM LINK &ndash;&gt;-->
<!--		</li>-->
<!--		&lt;!&ndash; /MENU ITEM &ndash;&gt;-->
<!--	</ul>-->
<!--	&lt;!&ndash; /MENU &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->
<!--	<p class="navigation-widget-section-title">My Profile</p>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-profile-info.html">Profile Info</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-profile-social.html">Social &amp; Stream</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-profile-notifications.html">Notifications</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-profile-messages.html">Messages</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-profile-requests.html">Friend Requests</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->
<!--	<p class="navigation-widget-section-title">Account</p>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-account-info.html">Account Info</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-account-password.html">Change Password</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-account-settings.html">General Settings</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->
<!--	<p class="navigation-widget-section-title">Groups</p>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-group-management.html">Manage Groups</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-group-invitations.html">Invitations</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->
<!--	<p class="navigation-widget-section-title">My Store</p>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-store-account.html">My Account <span class="highlighted">$250,32</span></a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-store-statement.html">Sales Statement</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-store-items.html">Manage Items</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="hub-store-downloads.html">Downloads</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->
<!--	<p class="navigation-widget-section-title">Main Links</p>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION TITLE &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">Home</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">Careers</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">Faqs</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">About Us</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">Our Blog</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">Contact Us</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->

<!--	&lt;!&ndash; NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--	<a class="navigation-widget-section-link" href="#">Privacy Policy</a>-->
<!--	&lt;!&ndash; /NAVIGATION WIDGET SECTION LINK &ndash;&gt;-->
<!--</nav>-->
<!-- /NAVIGATION WIDGET -->

<!-- CHAT WIDGET -->
<!--<aside id="chat-widget-messages" class="chat-widget closed sidebar right">-->
<!--	&lt;!&ndash; CHAT WIDGET MESSAGES &ndash;&gt;-->
<!--	<div class="chat-widget-messages" data-simplebar>-->
<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/03.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">16</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Nick Grissom</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/20.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">9</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Matt Parker</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline away">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/05.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">12</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Neko Bebop</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Awesome! I'll see you there!</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">54mins</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline offline">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/04.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">6</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Bearded Wonder</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Great! Then we'll meet with them at...</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/09.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">27</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Sandra Strange</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/12.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">10</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">James Murdock</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Great! Then we'll meet with them at...</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">7hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline away">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/10.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">5</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">The Green Goo</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/07.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">26</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Sarah Diamond</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">I'm sending you the latest news of...</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">16hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline offline">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/02.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">13</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Destroy Dex</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/08.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">4</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Damian Greyson</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--		<div class="chat-widget-message">-->
<!--			&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--			<div class="user-status">-->
<!--				&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--				<div class="user-status-avatar">-->
<!--					&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--					<div class="user-avatar small no-outline online">-->
<!--						&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-image-30-32" data-src="../../static/img/avatar/14.jpg"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--						<div class="user-avatar-progress">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-progress-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-progress-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-border-40-44"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--						<div class="user-avatar-badge">-->
<!--							&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--							<div class="user-avatar-badge-border">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-22-24"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--							<div class="user-avatar-badge-content">-->
<!--								&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--								<div class="hexagon-dark-16-18"></div>-->
<!--								&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--							&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--							<p class="user-avatar-badge-text">3</p>-->
<!--							&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--				<p class="user-status-title"><span class="bold">Paul Lang</span></p>-->
<!--				&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TEXT &ndash;&gt;-->
<!--				<p class="user-status-text small">Can you stream the new game?</p>-->
<!--				&lt;!&ndash; /USER STATUS TEXT &ndash;&gt;-->

<!--				&lt;!&ndash; USER STATUS TIMESTAMP &ndash;&gt;-->
<!--				<p class="user-status-timestamp floaty">2hrs</p>-->
<!--				&lt;!&ndash; /USER STATUS TIMESTAMP &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET MESSAGE &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /CHAT WIDGET MESSAGES &ndash;&gt;-->

<!--	&lt;!&ndash; CHAT WIDGET FORM &ndash;&gt;-->
<!--	<form class="chat-widget-form">-->
<!--		&lt;!&ndash; INTERACTIVE INPUT &ndash;&gt;-->
<!--		<div class="interactive-input small">-->
<!--			<input type="text" id="chat-widget-search" name="chat_widget_search" placeholder="Search Messages...">-->
<!--			&lt;!&ndash; INTERACTIVE INPUT ICON WRAP &ndash;&gt;-->
<!--			<div class="interactive-input-icon-wrap">-->
<!--				&lt;!&ndash; INTERACTIVE INPUT ICON &ndash;&gt;-->
<!--				<svg class="interactive-input-icon icon-magnifying-glass">-->
<!--					<use xlink:href="#svg-magnifying-glass"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /INTERACTIVE INPUT ICON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /INTERACTIVE INPUT ICON WRAP &ndash;&gt;-->

<!--			&lt;!&ndash; INTERACTIVE INPUT ACTION &ndash;&gt;-->
<!--			<div class="interactive-input-action">-->
<!--				&lt;!&ndash; INTERACTIVE INPUT ACTION ICON &ndash;&gt;-->
<!--				<svg class="interactive-input-action-icon icon-cross-thin">-->
<!--					<use xlink:href="#svg-cross-thin"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /INTERACTIVE INPUT ACTION ICON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /INTERACTIVE INPUT ACTION &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /INTERACTIVE INPUT &ndash;&gt;-->
<!--	</form>-->
<!--	&lt;!&ndash; /CHAT WIDGET FORM &ndash;&gt;-->

<!--	&lt;!&ndash; CHAT WIDGET BUTTON &ndash;&gt;-->
<!--	<div class="chat-widget-button">-->
<!--		&lt;!&ndash; CHAT WIDGET BUTTON ICON &ndash;&gt;-->
<!--		<div class="chat-widget-button-icon">-->
<!--			&lt;!&ndash; BURGER ICON &ndash;&gt;-->
<!--			<div class="burger-icon">-->
<!--				&lt;!&ndash; BURGER ICON BAR &ndash;&gt;-->
<!--				<div class="burger-icon-bar"></div>-->
<!--				&lt;!&ndash; /BURGER ICON BAR &ndash;&gt;-->

<!--				&lt;!&ndash; BURGER ICON BAR &ndash;&gt;-->
<!--				<div class="burger-icon-bar"></div>-->
<!--				&lt;!&ndash; /BURGER ICON BAR &ndash;&gt;-->

<!--				&lt;!&ndash; BURGER ICON BAR &ndash;&gt;-->
<!--				<div class="burger-icon-bar"></div>-->
<!--				&lt;!&ndash; /BURGER ICON BAR &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /BURGER ICON &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET BUTTON ICON &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET BUTTON TEXT &ndash;&gt;-->
<!--		<p class="chat-widget-button-text">Messages / Chat</p>-->
<!--		&lt;!&ndash; /CHAT WIDGET BUTTON TEXT &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /CHAT WIDGET BUTTON &ndash;&gt;-->
<!--</aside>-->
<!-- /CHAT WIDGET -->

<!-- CHAT WIDGET -->
<!--<aside id="chat-widget-message" class="chat-widget chat-widget-overlay hidden sidebar right">-->
<!--	&lt;!&ndash; CHAT WIDGET HEADER &ndash;&gt;-->
<!--	<div class="chat-widget-header">-->
<!--		&lt;!&ndash; CHAT WIDGET CLOSE BUTTON &ndash;&gt;-->
<!--		<div class="chat-widget-close-button">-->
<!--			&lt;!&ndash; CHAT WIDGET CLOSE BUTTON ICON &ndash;&gt;-->
<!--			<svg class="chat-widget-close-button-icon icon-back-arrow">-->
<!--				<use xlink:href="#svg-back-arrow"></use>-->
<!--			</svg>-->
<!--			&lt;!&ndash; CHAT WIDGET CLOSE BUTTON ICON &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET CLOSE BUTTON &ndash;&gt;-->

<!--		&lt;!&ndash; USER STATUS &ndash;&gt;-->
<!--		<div class="user-status">-->
<!--			&lt;!&ndash; USER STATUS AVATAR &ndash;&gt;-->
<!--			<div class="user-status-avatar">-->
<!--				&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--				<div class="user-avatar small no-outline online">-->
<!--					&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--					<div class="user-avatar-content">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-image-30-32" data-src="../../static/img/avatar/03.jpg"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->

<!--					&lt;!&ndash; USER AVATAR PROGRESS &ndash;&gt;-->
<!--					<div class="user-avatar-progress">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-progress-40-44"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR PROGRESS &ndash;&gt;-->

<!--					&lt;!&ndash; USER AVATAR PROGRESS BORDER &ndash;&gt;-->
<!--					<div class="user-avatar-progress-border">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-border-40-44"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR PROGRESS BORDER &ndash;&gt;-->

<!--					&lt;!&ndash; USER AVATAR BADGE &ndash;&gt;-->
<!--					<div class="user-avatar-badge">-->
<!--						&lt;!&ndash; USER AVATAR BADGE BORDER &ndash;&gt;-->
<!--						<div class="user-avatar-badge-border">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-22-24"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE BORDER &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE CONTENT &ndash;&gt;-->
<!--						<div class="user-avatar-badge-content">-->
<!--							&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--							<div class="hexagon-dark-16-18"></div>-->
<!--							&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--						</div>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE CONTENT &ndash;&gt;-->

<!--						&lt;!&ndash; USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--						<p class="user-avatar-badge-text">16</p>-->
<!--						&lt;!&ndash; /USER AVATAR BADGE TEXT &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR BADGE &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /USER STATUS AVATAR &ndash;&gt;-->

<!--			&lt;!&ndash; USER STATUS TITLE &ndash;&gt;-->
<!--			<p class="user-status-title"><span class="bold">Nick Grissom</span></p>-->
<!--			&lt;!&ndash; /USER STATUS TITLE &ndash;&gt;-->

<!--			&lt;!&ndash; USER STATUS TAG &ndash;&gt;-->
<!--			<p class="user-status-tag online">Online</p>-->
<!--			&lt;!&ndash; /USER STATUS TAG &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /USER STATUS &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /CHAT WIDGET HEADER &ndash;&gt;-->

<!--	&lt;!&ndash; CHAT WIDGET CONVERSATION &ndash;&gt;-->
<!--	<div class="chat-widget-conversation" data-simplebar>-->
<!--		&lt;!&ndash; CHAT WIDGET SPEAKER &ndash;&gt;-->
<!--		<div class="chat-widget-speaker left">-->
<!--			&lt;!&ndash; CHAT WIDGET SPEAKER AVATAR &ndash;&gt;-->
<!--			<div class="chat-widget-speaker-avatar">-->
<!--				&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--				<div class="user-avatar tiny no-border">-->
<!--					&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--					<div class="user-avatar-content">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-image-24-26" data-src="../../static/img/avatar/03.jpg"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER AVATAR &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-message">Hi Marina! It's been a long time!</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER TIMESTAMP &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-timestamp">Yesterday at 8:36PM</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER TIMESTAMP &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET SPEAKER &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET SPEAKER &ndash;&gt;-->
<!--		<div class="chat-widget-speaker right">-->
<!--			&lt;!&ndash; CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-message">Hey Nick!</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-message">You're right, it's been a really long time! I think the last time we saw was at Neko's party</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER TIMESTAMP &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-timestamp">10:05AM</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER TIMESTAMP &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET SPEAKER &ndash;&gt;-->

<!--		&lt;!&ndash; CHAT WIDGET SPEAKER &ndash;&gt;-->
<!--		<div class="chat-widget-speaker left">-->
<!--			&lt;!&ndash; CHAT WIDGET SPEAKER AVATAR &ndash;&gt;-->
<!--			<div class="chat-widget-speaker-avatar">-->
<!--				&lt;!&ndash; USER AVATAR &ndash;&gt;-->
<!--				<div class="user-avatar tiny no-border">-->
<!--					&lt;!&ndash; USER AVATAR CONTENT &ndash;&gt;-->
<!--					<div class="user-avatar-content">-->
<!--						&lt;!&ndash; HEXAGON &ndash;&gt;-->
<!--						<div class="hexagon-image-24-26" data-src="../../static/img/avatar/03.jpg"></div>-->
<!--						&lt;!&ndash; /HEXAGON &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; /USER AVATAR CONTENT &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; /USER AVATAR &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER AVATAR &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-message">Yeah! I remember now! The stream launch party</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-message">That reminds me that I wanted to ask you something</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->

<!--			&lt;!&ndash; CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--			<p class="chat-widget-speaker-message">Can you stream the new game?</p>-->
<!--			&lt;!&ndash; /CHAT WIDGET SPEAKER MESSAGE &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /CHAT WIDGET SPEAKER &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; /CHAT WIDGET CONVERSATION &ndash;&gt;-->

<!--	&lt;!&ndash; CHAT WIDGET FORM &ndash;&gt;-->
<!--	<form class="chat-widget-form">-->
<!--		&lt;!&ndash; INTERACTIVE INPUT &ndash;&gt;-->
<!--		<div class="interactive-input small">-->
<!--			<input type="text" id="chat-widget-message-text" name="chat_widget_message_text" placeholder="Write a message...">-->
<!--			&lt;!&ndash; INTERACTIVE INPUT ICON WRAP &ndash;&gt;-->
<!--			<div class="interactive-input-icon-wrap">-->
<!--				&lt;!&ndash; INTERACTIVE INPUT ICON &ndash;&gt;-->
<!--				<svg class="interactive-input-icon icon-send-message">-->
<!--					<use xlink:href="#svg-send-message"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /INTERACTIVE INPUT ICON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /INTERACTIVE INPUT ICON WRAP &ndash;&gt;-->

<!--			&lt;!&ndash; INTERACTIVE INPUT ACTION &ndash;&gt;-->
<!--			<div class="interactive-input-action">-->
<!--				&lt;!&ndash; INTERACTIVE INPUT ACTION ICON &ndash;&gt;-->
<!--				<svg class="interactive-input-action-icon icon-cross-thin">-->
<!--					<use xlink:href="#svg-cross-thin"></use>-->
<!--				</svg>-->
<!--				&lt;!&ndash; /INTERACTIVE INPUT ACTION ICON &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; /INTERACTIVE INPUT ACTION &ndash;&gt;-->
<!--		</div>-->
<!--		&lt;!&ndash; /INTERACTIVE INPUT &ndash;&gt;-->
<!--	</form>-->
<!--	&lt;!&ndash; /CHAT WIDGET FORM &ndash;&gt;-->
<!--</aside>-->
<!-- /CHAT WIDGET -->

<!--<Header />-->

<main>
	<slot />
</main>
