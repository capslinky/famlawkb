#!/bin/bash

# Install Python dependencies
pip install -r requirements.txt

# Build the MkDocs site to ../site directory
cd /vercel/path0
mkdocs build --site-dir site

echo "Build completed successfully!"