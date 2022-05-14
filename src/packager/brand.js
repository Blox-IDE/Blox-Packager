/*
These values control branding strings throughout the entire app. If you're forking, please take a few minutes to update them.

"The website" refers to the website itself that you use to load projects and convert them to another form.

"Packaged projects" refers to the files generated by the website. They include a line of text something like:
`Parts of this script are from the ${APP_NAME} <${WEBSITE}>, licensed as follows: ${COPYRIGHT_NOTICE}`

APP_NAME is the name of the app. This text is included in packaged projects.

WEBSITE is your app's website. This link is included in packaged projects.

COPYRIGHT_NOTICE is A copyright notice regarding the app. This text is included in packaged projects.
Also make sure to update the "License" section in README.md

ACCENT_COLOR is a color used in various parts of the interface and as the default value for the accent
color option. It should be a 6-character hex color (#123abc)

SOURCE_CODE is where users can find the app's source code. This link is included in the website's footer.
If this is set to an empty string, the link is removed.

FEEDBACK_PRIMARY and FEEDBACK_SECONDARY are feedback/bug report links shown in various places throughout the website.
name is how they will be labelled in the interface and link is of course a URL
*/

module.exports = {
  APP_NAME: 'TurboWarp Packager',
  WEBSITE: 'https://packager.turbowarp.org/',
  COPYRIGHT_NOTICE: `Copyright (C) 2021-2022 Thomas Weber

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
  ACCENT_COLOR: '#ff4c4c',
  SOURCE_CODE: 'https://github.com/TurboWarp/packager',
  FEEDBACK_PRIMARY: {
    name: 'Scratch',
    link: 'https://scratch.mit.edu/users/GarboMuffin/#comments'
  },
  FEEDBACK_SECONDARY: {
    name: 'GitHub',
    link: 'https://github.com/TurboWarp/packager/issues'
  }
};
