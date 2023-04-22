import type { NextApiRequest, NextApiResponse } from 'next'

const { Octokit } = require("@octokit/rest")
const { Base64 } = require("js-base64")
const fs = require("fs")

require("dotenv").config()

const octokit = new Octokit({
  auth: "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",
})
const main2=async(str)=>{

}
export default async (req:NextApiRequest, res:NextApiResponse)=> {


        const hash = req.body.hash;


        try{
            const filename=hash//assign as str
            const {data}=await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
              owner: "chandrashekarvt",
              repo: "githubApiUsageToUploadDownload",
                path: filename
              })
              console.log(data.html_url)
              res.status(200).json(data.html_url)
            }
             catch (err) {
            console.error(err)
            }
          }
