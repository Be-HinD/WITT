package com.ssafy.rasingdust.domain.problem.service;

import com.ssafy.rasingdust.domain.problem.dto.response.GetProblemResponse;
import com.ssafy.rasingdust.domain.user.dto.response.VisitUserResponse;

public interface ProblemService {
    public GetProblemResponse getProblem(Long number);
}
