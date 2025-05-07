<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FanX0/gerastore">
    <img src="public/img/gerastore.png" alt="Logo" width="80" height="80">  <!-- bug -->
  </a>

  <h3 align="center">Gerastore E commerce</h3>

  <p align="center">
    E commerce Website Laravel, Inertia, React
    <br />
    <a href="https://github.com/FanX0/gerastore"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FanX0/gerastore">View Demo</a>
    &middot;
    <a href="https://github.com/FanX0/gerastore/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/FanX0/gerastore/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Screen Shot][product-screenshot]](https://github.com/FanX0/gerastore)

**GeraStore** is a demo perfume‑shop application built with:

- **Laravel 11** (backend framework)
- **Inertia.js** (server-driven SPA glue)
- **React** (UI library)
- **Payment Gateway** (Midtrans)
- **shipping cost** (Api RajaOngkir)

It’s also part of my **campus practicum**—a real‑world project for applying what I’ve learned in class.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Laravel][Laravel.com]][laravel-url]
- [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

require php 8.1,
midtrans account

1. Clone the repo
   ```sh
   git clone https://github.com/FanX0/gerastore
   ```
2. Open the project
   ```sh
   cd gerastore
   ```
3. install composer
   ```sh
   composer install
   ```
4. install npm
   ```sh
   npm install
   ```
5. change .env.example to .env and personalize with your setting
6. create db and run migrate and seed
   ```sh
   php artisan migrate
   ```
   ```sh
   php artisan db:seed
   ```
7. run server and interface
   ```sh
   php artisan serve
   ```
   ```sh
   npm run dev
   ```
8. delete storage and link again

   ```sh
   php artisan cache:clear
   ```

   ```sh
   php artisan storage:link
   ```

9. run project on browser

   ```sh
   localhost:8000
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

[![Product Screen Shot][product-screenshot2]](https://github.com/FanX0/gerastore)
[![Product Screen Shot][product-screenshot3]](https://github.com/FanX0/gerastore)
[![Product Screen Shot][product-screenshot4]](https://github.com/FanX0/gerastore)
[![Product Screen Shot][product-screenshot5]](https://github.com/FanX0/gerastore)
[![Product Screen Shot][product-screenshot6]](https://github.com/FanX0/gerastore)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Gerastore

See the [open issues](https://github.com/FanX0/gerastore/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NameFeature`)
3. Commit your Changes (`git commit -m 'Add some NameFeature'`)
4. Push to the Branch (`git push origin feature/NameFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/FanX0/gerastore/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FanX0/gerastore" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Linkedin [Farid Azhari](https://www.linkedin.com/in/faridazharii/) - Email faridazhari111@gmail.com

Project Link: [https://github.com/FanX0/gerastore](https://github.com/FanX0/gerastore)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [https://laravel.com/](https://laravel.com/)
- [https://inertiajs.com/](https://inertiajs.com/)
- [https://react.dev/](https://react.dev/)
- [https://tailwindcss.com/](https://tailwindcss.com/)
- [https://rajaongkir.com/](https://rajaongkir.com/)
- [https://midtrans.com/](https://midtrans.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-url]: https://github.com/FanX0/gerastore/issues
[license-url]: https://github.com/FanX0/gerastore/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/faridazharii/
[product-screenshot2]: public/img/sspicture2.png
[product-screenshot3]: public/img/sspicture3.png
[product-screenshot4]: public/img/sspicture4.png
[product-screenshot5]: public/img/sspicture5.png
[product-screenshot6]: public/img/sspicture6.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[GitHub]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
