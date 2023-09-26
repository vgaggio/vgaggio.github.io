import React from "react";
import { TextField } from "./Fields";
import Button from "./Button";
import Container from "./Container";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-gray-500">
            &copy; Copyright - BircleAI © Bircle Corp. {new Date().getFullYear()}. {t('allRightsReserved')}
          </p>
          {/* <form className="flex w-full justify-center md:w-auto mt-6 md:mt-0">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="blue" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form> */}
          <Link
          href="https://twitter.com/BircleAI"
          className="group"
          aria-label="BircleAI on Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
            aria-hidden="true"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
          </svg>
        </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
