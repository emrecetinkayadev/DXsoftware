package main

import (
	"fmt"
	"regexp"
	"strings"
)

func main() {
	test := "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)"
	re, err := regexp.Compile("[^A-Za-z ]")
	if err != nil {
		fmt.Println(err)
	}
	noSpecial := re.ReplaceAllString(test, "")
	stringList := strings.Split(noSpecial, " ")
	longestStrings := allLongestStrings(stringList)
	longestString := vowelCounter(longestStrings)
	fmt.Println(longestString)
}

// Count vowals and find the string which has most.
func vowelCounter(longestStrings []string) string {
	var result string
	var mostVawal int = 0
	for _, s := range longestStrings {
		count := 0
		for _, char := range s {
			switch char {
			case 'a', 'e', 'i', 'o', 'u': //Vowals list.
				count++
			}
			if count >= mostVawal {
				result = ""
				mostVawal = count
			}
			result = s
		}
	}
	return result
}

// Find the longest string.
func allLongestStrings(inputArray []string) []string {
	max := -1 // -1 is guaranteed to be less than length of string
	var result []string
	for _, s := range inputArray {
		if len(s) < max {
			// Skip shorter string
			continue
		}
		if len(s) > max {
			// Found longer string. Update max and reset result.
			max = len(s)
			result = result[:0]
		}
		// Add to result
		result = append(result, s)
	}
	return result
}
