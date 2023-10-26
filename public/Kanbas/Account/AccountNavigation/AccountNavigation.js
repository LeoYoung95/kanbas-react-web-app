function AccountNavigation(active) {
    const links = [
        { name: 'Notifications', href: '#' },
        { name: 'Profile', href: "/Kanbas/Account/Profile/Profile.html" },
        { name: 'Files', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'ePortfolios', href: '#' },
        { name: 'Shared Content', href: '#' },
        { name: 'The Hub', href: '#' },
        { name: 'Qwickly Course Tools', href: '#' },
        { name: 'Global Announcements', href: '#' },
    ];

    return `
      <div class="nav-container">
        <div class="second-sidebar-container">
          <nav class="second-sidebar">
            <ul class="list-unstyled">
              ${links.map(link => `
                <li>
                  <a class="${link.name === active ? "active" : ""}" href="${link.href}">${link.name}</a>
                </li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </div>
    `;
}

export default AccountNavigation;
