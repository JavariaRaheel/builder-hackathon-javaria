'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
// import {structure} from './src/sanity/structure'  // Ensure this import path is correct

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // structureTool({structure}), // Pass structure function directly
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
