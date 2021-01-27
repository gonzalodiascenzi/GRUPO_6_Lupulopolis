CREATE TABLE products (
  id int(11) NOT NULL,
  product_name varchar(30) DEFAULT NULL,
  description varchar(30) DEFAULT NULL,
  image varchar(30) DEFAULT NULL,
  category varchar(30) DEFAULT NULL,
  style varchar(30) DEFAULT NULL,
  volumen varchar(30) DEFAULT NULL,
  origin varchar(30) DEFAULT NULL,
  brewer varchar(30) DEFAULT NULL,
  price float DEFAULT NULL,
  discount float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla products
--

INSERT INTO products (id, product_name, description, image, category, style, volumen, origin, brewer, price, discount) VALUES
(1, 'Cerveza Corona x6', 'Six pack de Cerveza Corona', 'producto2.png', 'beer', 'pilsener', '375cc', 'Mexico', 'Grupo Modelo', 600, 0),
(2, 'Cerveza Corona x6', 'Six pack de Cerveza Corona', 'producto2.png', 'beer', 'pilsener', '375cc', 'Mexico', 'Grupo Modelo', 600, 0),
(3, 'Cerveza Corona x6', 'Cerveza Corona x6', '1608164611904-producto2.png', 'Cerveza', 'pilsener', '375cc', 'Mexico', 'Grupo Modelo', 600, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla users
--

CREATE TABLE users (
  id int(11) NOT NULL,
  first_name varchar(30) DEFAULT NULL,
  last_name varchar(30) DEFAULT NULL,
  email varchar(30) DEFAULT NULL,
  password varchar(100) DEFAULT NULL,
  category varchar(30) DEFAULT NULL,
  image varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla users
--

INSERT INTO users (id, first_name, last_name, email, password, category, image) VALUES
(1, 'Matias', 'Bossa', 'matubossa@gmail.com', '$2a$10$UxPeIxRGXciaORMBgmx8xuEFdQThfKJyscJv9Lcb9NrDZ6QASXqma', 'admin', ''),
(2, 'aa', 'aa', '1111jejej@gmail.com', '$2a$10$P89iYdLtawR7w0NHGCiig.iu3AxzPV.javkwAvtRozGEdqjm/1t.W', 'user', ''),
(3, 'aa', 'aa', 'jejej2@gmail.com', '$2a$10$JhGTUMTwMOapi2s653S48e9iZ8GX7W/tFSH/gqMyKgd3V0RQwaX6W', 'admin', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla products
--
ALTER TABLE products
  ADD PRIMARY KEY (id);

--
-- Indices de la tabla users
--
ALTER TABLE users
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla products
--
ALTER TABLE products
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla users
--
ALTER TABLE users
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;