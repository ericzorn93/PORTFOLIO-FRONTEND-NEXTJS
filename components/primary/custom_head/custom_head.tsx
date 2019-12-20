import React, { useMemo } from "react";
import { NextComponentType } from "next";
import Head from "next/head";

interface CustomHeadProps {
  pageTitle?: string;
}

const CustomHead: NextComponentType<null, null, CustomHeadProps> = ({
  pageTitle
}) => {
  // Compute title if the page title is passed in
  const computedTitle = useMemo(() => {
    let title = "Eric Zorn Portfolio";

    if (pageTitle) {
      title += ` ${pageTitle}`;
    }

    return title;
  }, [pageTitle]);

  return (
    <>
      <Head>
        <title>{computedTitle}</title>
      </Head>
    </>
  );
};

export default CustomHead;
