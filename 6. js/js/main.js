/* Colores corporativos (verde formal y saludable) */
:root {
  --color-primary: #1e5720;        /* verde oscuro formal */
  --color-primary-dark: #144014;   /* más oscuro aún (hover) */
  --color-accent: #388e3c;         /* verde de acento llamativo */
  --color-accent-light: #43a047;   /* verde más claro (hover) */
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --color-bg-light: #f9f9f9;
}

/* Configuración general */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  background: var(--color-bg);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header y menú */
.header {
  background: var(--color-bg);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo a {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--color-primary);
  text-decoration: none;
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-list li {
  margin-left: 1.5rem;
}

.nav-list a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-list a:hover,
.nav-list .active {
  color: var(--color-primary);
}

/* Hero */
.hero {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
              url("../images/hero.jpg");
  background-size: cover;
  color: #fff;
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

/* Botones principales (verde profesional) */
.btn {
  background: var(--color-primary);
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: background 0.3s;
}

.btn:hover {
  background: var(--color-primary-dark);
}

/* Botones secundarios (verde más brillante para atraer atención) */
.btn-sm {
  background: var(--color-accent);
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  display: 
