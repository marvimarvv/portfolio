<template>
  <div>
    <nav>
      <ul class="nav">
        <li class="nav__item">
          <nuxt-link class="nav__link" data-toggle="tab" to="/">
            <svg
              class="nav__icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              aria-label="Home icon"
            >
              <path
                d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"
              />
            </svg>
            <span>Home</span>
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" data-toggle="tab" to="/projects">
            <svg
              class="nav__icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              aria-label="Project icon"
            >
              <path
                d="M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-1-17h-17v13s-.665-1-2-1c-1.104 0-2 .896-2 2s.896 2 2 2h19v-16zm-18-2.68c-.427-.971-1.327-1.325-2-1.32-.661.005-1.568.3-2 1.32v16.178c.394-1.993 2.245-2.881 4-2.401v-13.777zm15 15.68h-12v-10h12v10zm-8-9h-3v8h10v-4h-2v3h-1v-3h-3v3h-1v-7zm7 0h-6v3h6v-3z"
              />
            </svg>
            <span>Projects</span>
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" data-toggle="tab" to="/about">
            <svg
              class="nav__icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              aria-label="Vita icon"
            >
              <path
                d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z"
              />
            </svg>
            <span>About</span>
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" data-toggle="tab" to="/skills">
            <svg
              class="nav__icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              aria-label="Skills icon"
            >
              <path
                d="M13 24h-2c-.288 0-.563-.125-.753-.341l-.576-.659h4.658l-.576.659c-.19.216-.465.341-.753.341zm1.867-3c.287 0 .52.224.52.5s-.233.5-.52.5h-5.734c-.287 0-.52-.224-.52-.5s.233-.5.52-.5h5.734zm-2.871-17c2.983 0 6.004 1.97 6.004 5.734 0 1.937-.97 3.622-1.907 5.252-.907 1.574-1.843 3.201-1.844 5.014h1.001c0-3.286 3.75-6.103 3.75-10.266 0-4.34-3.502-6.734-7.004-6.734-3.498 0-6.996 2.391-6.996 6.734 0 4.163 3.75 6.98 3.75 10.266h.999c.001-1.813-.936-3.44-1.841-5.014-.938-1.63-1.908-3.315-1.908-5.252 0-3.764 3.017-5.734 5.996-5.734zm9.428 7.958c.251.114.362.411.248.662-.114.251-.41.363-.662.249l-.91-.414c-.252-.114-.363-.41-.249-.662.114-.251.411-.362.662-.248l.911.413zm-18.848 0c-.251.114-.362.411-.248.662.114.251.41.363.662.249l.91-.414c.252-.114.363-.41.249-.662-.114-.251-.411-.362-.662-.248l-.911.413zm18.924-2.958h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5s-.224.5-.5.5zm-18-1c.276 0 .5.224.5.5s-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1zm16.818-3.089c.227-.158.284-.469.126-.696-.157-.227-.469-.283-.696-.126l-.821.57c-.227.158-.283.469-.126.696.157.227.469.283.696.126l.821-.57zm-16.636 0c-.227-.158-.284-.469-.126-.696.157-.227.469-.283.696-.126l.821.57c.227.158.283.469.126.696-.157.227-.469.283-.696.126l-.821-.57zm13.333-3.033c.134-.241.048-.546-.193-.68-.241-.135-.546-.048-.68.192l-.488.873c-.135.241-.048.546.192.681.241.134.546.048.681-.193l.488-.873zm-10.03 0c-.134-.241-.048-.546.193-.68.241-.135.546-.048.68.192l.488.873c.135.241.048.546-.192.681-.241.134-.546.048-.681-.193l-.488-.873zm5.515-1.378c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1c0 .276.224.5.5.5s.5-.224.5-.5v-1z"
              />
            </svg>
            <span>Skills</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  padding: 3rem 6rem 6rem;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 1100px) {
    justify-content: space-evenly;
    padding: 20px 0;
    border-top: var(--border);
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }

  &__item {
    font-size: 1.2rem;
    flex: 0 0 15%;
    padding: 0;
    text-align: center;

    @media (max-width: 1100px) {
      flex: 0 0 auto;
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.85rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--text);
    font-size: 1.5rem;
    transition: all 0.2s ease;

    path {
      fill: var(--text);

      .contrast-theme & {
        stroke: var(--text);
        stroke-width: 1;
      }
    }

    @media (max-width: 1100px) {
      width: 6rem;
      height: 6rem;
      margin-bottom: 0;
      padding: 0;
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      height: 5rem;
      width: 5rem;
    }
  }

  &__icon {
    margin-bottom: 0.5rem;
  }
}

/* exact link will show the styling for only the exact matching link */
a.nuxt-link-exact-active {
  font-weight: 900;

  path {
    stroke: var(--text);
    stroke-width: 1;
  }

  @media (prefers-contrast: more) {
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
    text-underline-offset: 0.5rem;
  }

  .contrast-theme & {
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
    text-underline-offset: 0.5rem;
  }
}
</style>
