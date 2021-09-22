class Github {

  constructor() {
    this.client_id = '0e5645436b536a9380c6';
    this.client_secret = '0aec50556ca75a0a0401a8770a70304a720375a8';
    this.repos_count = 5;
    this.repos_sort = 'sort=updated&direction=desc'
  }

  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_id=${this.client_secret}`);

    const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_id=${this.client_secret}`);


    const profileData = await profileRes.json();
    const reposData = await profileRepos.json();
    return {
      profileData,
      reposData
    };
  }

}