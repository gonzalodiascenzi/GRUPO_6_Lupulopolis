--
-- Volcado de datos para la tabla products
--

INSERT INTO products (id, product_name, description, image, category, style, volumen, origin, brewer, price, discount) VALUES
(1, 'Cerveza Corona x6', 'Six pack de Cerveza Corona', 'producto2.png', 'beer', 'pilsener', '375cc', 'Mexico', 'Grupo Modelo', 600, 0),
(2, 'Cerveza Corona x6', 'Six pack de Cerveza Corona', 'producto2.png', 'beer', 'pilsener', '375cc', 'Mexico', 'Grupo Modelo', 600, 0),
(3, 'Cerveza Corona x6', 'Cerveza Corona x6', '1608164611904-producto2.png', 'Cerveza', 'pilsener', '375cc', 'Mexico', 'Grupo Modelo', 600, 0);

-- --------------------------------------------------------

-- Volcado de datos para la tabla users
--

INSERT INTO users (id, first_name, last_name, email, password, category, image) VALUES
(1, 'Matias', 'Bossa', 'matubossa@gmail.com', '$2a$10$UxPeIxRGXciaORMBgmx8xuEFdQThfKJyscJv9Lcb9NrDZ6QASXqma', 'admin', ''),
(2, 'aa', 'aa', '1111jejej@gmail.com', '$2a$10$P89iYdLtawR7w0NHGCiig.iu3AxzPV.javkwAvtRozGEdqjm/1t.W', 'user', ''),
(3, 'aa', 'aa', 'jejej2@gmail.com', '$2a$10$JhGTUMTwMOapi2s653S48e9iZ8GX7W/tFSH/gqMyKgd3V0RQwaX6W', 'admin', '');
