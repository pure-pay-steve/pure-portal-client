//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.   

export function toProperCase(str: string) {
  return str
    .split(" ")
    .map(word => {
      switch (toLowerCase(word)) {
        case "de":
        case "van":
        case "der":
        case "den":
        case "von":
          return word
        default:
          if (word.startsWith("mc")) {
            return "Mc" + word.charAt(2).toUpperCase() + word.slice(3).toLowerCase()
          } else if (word.startsWith("mac")) {
            return "Mac" + word.charAt(3).toUpperCase() + word.slice(4).toLowerCase()
          } else {
            return toUpperCase(word.charAt(0)) + toLowerCase(word.slice(1))
          }
      }
    })
    .join(" ")
}

export function toUpperCase(str: string) {
  return str
    .replace("š", "Š")
    .replace("č", "Č")
    .replace("ž", "Ž")
    .toUpperCase()
}

export function toLowerCase(str: string) {
  return str
    .replace("Š", "š")
    .replace("Č", "č")
    .replace("Ž", "ž")
    .toLowerCase()
}