
CREATE SEQUENCE public.users_id_seq;

CREATE TABLE public.users (
                id INTEGER NOT NULL DEFAULT nextval('public.users_id_seq'),
                email VARCHAR(100) NOT NULL,
                name VARCHAR(50) NOT NULL,
                lastname VARCHAR(60) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                address VARCHAR(200) NOT NULL,
                CONSTRAINT users_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

CREATE TABLE public.info (
                id INTEGER NOT NULL,
                art VARCHAR(20) NOT NULL,
                cinema VARCHAR(50) NOT NULL,
                music VARCHAR(50) NOT NULL,
                CONSTRAINT info_pk PRIMARY KEY (id)
);


ALTER TABLE public.info ADD CONSTRAINT users_info_fk
FOREIGN KEY (id)
REFERENCES public.users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;