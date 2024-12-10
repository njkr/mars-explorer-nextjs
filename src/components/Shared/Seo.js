import React from 'react'

//lib
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { api_url } from '../../utils/constants'

function SEO({
  description,
  lang,
  meta,
  title,
  schemaMarkup,
  pathname,
}) {


  const metaDescription = description || ""

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Marsx Game`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: 'Nawras Mansour',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@Nawras`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //   name: `robots`,
        //   content: `index`,
        // },
      ].concat(meta)}
    >
      {schemaMarkup && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaMarkup)}
        </script>
      )}

      <link
        rel='canonical'
        href={`${pathname ? api_url + '/' + pathname : api_url}`}
      />
    </Helmet>
  )
}


// Adding PropTypes to validate props
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  schemaMarkup: PropTypes.object,
  pathname: PropTypes.string,
};




export default SEO
