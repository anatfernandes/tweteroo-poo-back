--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tweets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tweets (
    id integer NOT NULL,
    username text NOT NULL,
    tweet text NOT NULL,
    avatar text NOT NULL
);


--
-- Name: tweets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tweets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tweets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tweets_id_seq OWNED BY public.tweets.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    avatar text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: tweets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tweets ALTER COLUMN id SET DEFAULT nextval('public.tweets_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: tweets; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tweets VALUES (1, 'kira', 'Eu amo muito o HUB <3', 'https://pm1.narvii.com/6476/b97b7b8157934c37f5cd3e7a57100e1e9cec7469_hq.jpg');
INSERT INTO public.tweets VALUES (2, 'kira', 'Qual é o seu nome mesmo?', 'https://pm1.narvii.com/6476/b97b7b8157934c37f5cd3e7a57100e1e9cec7469_hq.jpg');
INSERT INTO public.tweets VALUES (4, 'Patrick', 'Quero um hambúrguer com sorvete de morango e uma rodela de melancia, por favor.', 'https://tm.ibxk.com.br/2021/05/31/31172036659054.jpg');
INSERT INTO public.tweets VALUES (5, 'Patrick', 'Ah, e não esquece meu brinde!', 'https://tm.ibxk.com.br/2021/05/31/31172036659054.jpg');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'bobesponja', 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info');
INSERT INTO public.users VALUES (2, 'kira', 'https://pm1.narvii.com/6476/b97b7b8157934c37f5cd3e7a57100e1e9cec7469_hq.jpg');
INSERT INTO public.users VALUES (4, 'Patrick', 'https://tm.ibxk.com.br/2021/05/31/31172036659054.jpg');


--
-- Name: tweets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tweets_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: tweets tweets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tweets
    ADD CONSTRAINT tweets_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

