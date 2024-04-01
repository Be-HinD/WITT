package com.ssafy.rasingdust.domain.jwt.token.controller;

import com.ssafy.rasingdust.domain.jwt.refreshtoken.dto.request.CreateAccessTokenRequest;
import com.ssafy.rasingdust.domain.jwt.token.dto.response.CreateAccessTokenResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Tag(name ="AccessToken 관련 Controller", description = "AccessToken 관련 API")
public interface TokenControllerDocs {

    @Operation(summary = "RefreshToken을 받아 AccessToken을 생성합니다.", description = "BODY로 RefreshToken을 받아 AccessToken을 생성")
    @ApiResponse(responseCode = "201", description = "AccessToken 생성에 성공하였습니다.", content = @Content(schema = @Schema(implementation = String.class)))
    @PostMapping("/token")
    public ResponseEntity<CreateAccessTokenResponse> createNewAccessToken(@RequestBody CreateAccessTokenRequest request);

}
