import React from "react"
import ContentLoader from "react-content-loader/native"

const OutletLoader = props => {
  return (
    <ContentLoader
        speed={2}
        width={400}
        height={700}
        viewBox="0 0 400 700"
        backgroundColor="#e6e6e6"
        foregroundColor="#c5c2c2">
        <Rect x="47" y="193" rx="2" ry="2" width="140" height="10" />
        <Rect x="47" y="174" rx="2" ry="2" width="140" height="10" />
        <Rect x="42" y="0" rx="2" ry="2" width="150" height="163" />
        <Rect x="221" y="193" rx="2" ry="2" width="140" height="10" />
        <Rect x="221" y="174" rx="2" ry="2" width="140" height="10" />
        <Rect x="216" y="0" rx="2" ry="2" width="150" height="163" />
        <Rect x="49" y="418" rx="2" ry="2" width="140" height="10" />
        <Rect x="49" y="399" rx="2" ry="2" width="140" height="10" />
        <Rect x="44" y="225" rx="2" ry="2" width="150" height="163" />
        <Rect x="223" y="418" rx="2" ry="2" width="140" height="10" />
        <Rect x="223" y="399" rx="2" ry="2" width="140" height="10" />
        <Rect x="218" y="225" rx="2" ry="2" width="150" height="163" />
        <Rect x="49" y="624" rx="2" ry="2" width="140" height="10" />
        <Rect x="44" y="450" rx="2" ry="2" width="150" height="163" />
        <Rect x="223" y="643" rx="2" ry="2" width="140" height="10" />
        <Rect x="223" y="624" rx="2" ry="2" width="140" height="10" />
        <Rect x="218" y="450" rx="2" ry="2" width="150" height="163" />
      </ContentLoader>
  )
}

OutletLoader.metadata = {
  name: Ardi W Saputra,
  github: https://github.com/ardiwsaputra, // Github username
  description: Nothing, 
  filename: OutletLoader // filename of your loader
}

export default OutletLoader
